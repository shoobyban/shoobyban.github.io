<?php

ini_set('display_errors',1);

$c = isset($_REQUEST['c'])?:'';
if (!$c) {
    include ('index.html');
    die();
}

if (!isset($_REQUEST['bid'])) {
    $backupFileId= 'shoobyban';
} else {
    $backupFileId = $_REQUEST['bid'];
}

$categories = [];
$recipes = [];
$titles = [];
$d = '';

if ($handle = opendir('upload')) {

    while (false !== ($entry = readdir($handle))) {
        if (strpos($entry, '.xml') !== false) {
            list($cats, $recs) = loadBackup('upload/'.$entry);
            $cats = json_decode(json_encode($cats),true);
            foreach ($cats as $cat) {
                $catName = $cat[0];
                if (!in_array($catName,$categories)) {
                    $categories[] = $catName;
                    if (!array_key_exists($catName,$recipes)) {
                        $recipes[$catName] = [];
                    }
                }
            }
            $recs = json_decode(json_encode($recs),true);
            foreach ($recs as $rec) {
                if (!in_array($rec['title'],$titles)) {
                    $titles[] = $rec['title'];
                    $recipes[$rec['category']][] = $rec;
                }
            }
        }
    }
}

if ($c == 'index') {
    $ret = [];
    ksort($recipes);
    foreach ($recipes as $cat => $recs) {
        $ret[] = ['entryType'=>'label', 'entryValue'=> $cat];
        foreach ($recs as $recipe) {
            $ret[] = ['entryType'=>'recipe', 'entryValue' => $recipe];
        }
    }
    print json_encode(['error'=>'','list'=>$ret]);
    die();
}

if ($c == 'list') {
    print json_encode(['categories'=>$categories, 'recipes'=>$recipes,'error'=>'']);
    die();
}

if ($c == 'get') {
    if (!isset($_REQUEST['id'])) {
        $recipeId= '----';
    } else {
        $recipeId = $_REQUEST['id'];
    }
    $ret = [];
    foreach ($recipes as $recipe) {
        if (isset($recipe['webid']) && $recipe['webid'] == $recipeId) {
            $ret = $recipe;
        }
    }
    print json_encode(['error'=> '', 'recipe'=>$ret]);
    die();
}
// }

/**
 * @param $xml
 * @return array
 */
function getList($xml,$name,$nodeType)
{
    $indexList = $xml->xpath('//plist/dict/key[.="'.$name.'"]/following-sibling::dict[1]/key');
    $valueList = $xml->xpath('//plist/dict/key[.="'.$name.'"]/following-sibling::dict[1]/'.$nodeType);
    $return = [];
    foreach ($indexList as $index => $indexList) {
        $return[(string)$indexList] = $valueList[$index];
    }
    return $return;
}

/**
 * @param $fileName
 * @return array
 */
function loadBackup($fileName)
{
    $xml = simplexml_load_file($fileName);
    $categories = getList($xml, 'categories', 'string');
    $recipeItems = getList($xml, 'recipes', 'dict');
    $recipes = [];
    foreach ($recipeItems as $recipeItem) {
        $recipe = [];
        $nextKey = '';
        foreach ($recipeItem as $key => $item) {
            if ($key == 'key') {
                $nextKey = (string)$item;
            } elseif ($nextKey) {
                $recipe[$nextKey] = (string)$item;
            }
        }
        if (strpos($recipe['body'], '<') === false) {
            $recipe['body'] = nl2br($recipe['body']);
        }
        $recipes[] = $recipe;
    }
//    saveCache($cacheFilename, array($categories, $recipes));
    return array($categories, $recipes);
}

function saveCache($filename, $array) {
    @file_put_contents($filename, json_encode($array));
}

function loadCache($filename) {
    return @json_decode(@file_get_contents($filename));
}

