---
title: Creating Magento admin grid without database tables
author: Sam
type: post
date: 2012-11-15T13:10:01+00:00
url: /creating-magento-admin-grid-without-database-tables/
tags:
  - adminhtml
  - block
  - development
  - grid
  - magento

---
It&#8217;s not common that you have to display something that&#8217;s not in the Magento database. It was not too difficult to figure out how to do it but checking this might save you few minutes.

Feel free to download the code itself: [Wizguild_VirtualGrid.zip][1]

<div id="attachment_168" style="width: 344px" class="wp-caption aligncenter">
  <a href="http://wizguild.com/wp-content/uploads/2012/11/vg_tree1.png"><img class="size-full wp-image-168" title="Virtual grid package structure" alt="" src="http://wizguild.com/wp-content/uploads/2012/11/vg_tree1.png" width="334" height="485" srcset="https://wizguild.com/wp-content/uploads/2012/11/vg_tree1.png 334w, https://wizguild.com/wp-content/uploads/2012/11/vg_tree1-206x300.png 206w" sizes="(max-width: 334px) 100vw, 334px" /></a>
  
  <p class="wp-caption-text">
    Virtual grid package structure
  </p>
</div>

<p style="text-align: left;">
  In the Grid.php I create a Varien_Data_Collection object:
</p>

<pre class="lang:default decode:true" title="In _prepareCollection we create a Varien_Data_Collection object">protected function _prepareCollection()
    {
        $collection = new Varien_Data_Collection();
        foreach (array('alpha','beta','charlie') as $item) {
            $data = new Varien_Object();
            $data-&gt;setName($item);
            $collection-&gt;addItem($data);
        }
        $this-&gt;setCollection($collection);
    }</pre>

&#8230;then just use it in the _prepareColumns():

<pre class="lang:default decode:true" title="Using the collection in _prepareColumns ">protected function _prepareColumns()
    {
        $this-&gt;addColumn('name',
            array(
                'header' =&gt; 'Name',
                'align' =&gt;'left',
                'width' =&gt; '50px',
                'index' =&gt; 'name',
            ));
        return parent::_prepareColumns();
    }</pre>

The remaining parts are just administration and normal Magento admin template handling.

Feel free to ask questions on the included e-mail address (check file headers).


 [1]: http://wizguild.com/wp-content/uploads/2012/11/Wizguild_VirtualGrid.zip