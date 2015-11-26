'use strict';

// Import the Vendor Specific Scripts e.g. jQuery
import './vendor';

// Import modules
import headerPrimary from './components/headers/header-primary/header-primary';
import scrollOnClick from './components/ui-widgets/scroll-on-click/scroll-on-click';

// Run the modules
new headerPrimary();
new scrollOnClick();