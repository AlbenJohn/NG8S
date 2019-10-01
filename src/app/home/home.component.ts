import { Component, OnInit } from '@angular/core';
import * as $ from 'jquery'
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public manageLayoutOptions = {
    name: 'outerLayout'
    , resizeWithWindow: true
    , resizeWhileDragging: false
    , resizerDragOpacity: 0.5    
    , contentSelector: ".ui-widget-content"
    , center__minWidth: 600
    , fxName: "slide"
    , fxSpeed: 600
    , inset: { top: 0, left: 0, right: 0 }
    , resizerDblClickToggle: false
    , livePaneResizing: false
    , liveContentResizing: false
    , liveResizingTolerance: 0
    , spacing_open: 10
    , spacing_closed: 10
    , togglerLength_open: 30
    , togglerLength_closed: 30
    , closable: true
    , resizable: true
    , slidable: true
    , triggerEventsOnLoad: true
    , slideTrigger_open: "mouseenter"
    , enableCursorHotkey: false
    , stateManagement__enabled: true
    , stateManagement__stateKeys: "west.size,east.size,west.isClosed,east.isHidden"
    , stateManagement__autoLoad: false // disable automatic cookie-load
    , stateManagement__autoSave: false // disable automatic cookie-save
   
 ,north: {
      paneSelector: "#outer-north"
   ,  fxName:                "none"
   ,  spacing_closed:        38
   , resizable: false
   , closable: false
   ,  initClosed:false
   
   }
,  south: {
      fxName:                "none"
   ,  spacing_closed:        8
   ,  togglerLength_closed:  "100%"
   ,resizable: false
    , closable: false
   }
   ,west:{
    paneSelector: "#outer-west"
    ,resizable: false
    , closable: false
    
   }
   ,east:{
      initClosed:true
   }
  }

  public OuterLayoutOptions = {
    name: 'outerLayout'
    , resizeWithWindow: true
    , resizeWhileDragging: false
    , resizerDragOpacity: 0.5    
    , contentSelector: ".ui-widget-content"
    , center__minWidth: 600
    , fxName: "slide"
    , fxSpeed: 600
    , inset: { top: 0, left: 0, right: 0 }
    , resizerDblClickToggle: false
    , livePaneResizing: false
    , liveContentResizing: false
    , liveResizingTolerance: 0
    , spacing_open: 10
    , spacing_closed: 10
    , togglerLength_open: 30
    , togglerLength_closed: 30
    , closable: true
    , resizable: true
    , slidable: true
    , triggerEventsOnLoad: true
    , slideTrigger_open: "mouseenter"
    , enableCursorHotkey: false
    , stateManagement__enabled: true
    , stateManagement__stateKeys: "west.size,east.size,west.isClosed,east.isHidden"
    , stateManagement__autoLoad: false // disable automatic cookie-load
    , stateManagement__autoSave: false // disable automatic cookie-save
    , center: {
        paneSelector: "#outer-center"
        ,size:'100%'
    }
    , north: {
        paneSelector: "#outer-north"
        , size: "4%"
        , minSize: 40
        , togglerContent_closed: '<i class="tglr-arw to_dwn"></i>'
        , togglerAlign_open: "right"
        , togglerAlign_closed: "right"
        , resizable: false
        , closable: false
        , spacing_open: 3
        , spacing_closed: 10
        , childOptions: {
            name: "Header"            
            , center: {
                paneSelector: ".erp_header"
                , childOptions:
                {
                    name: "headerblock"
                    , spacing_open: 1
                    , spacing_closed: 1

                    , togglerLength_open: 20
                    , togglerLength_closed: 20
                    , north: {
                        size: '100%'
                        , initClosed: true
                        , initHidden: true
                        , spacing_open: 1
                        , spacing_closed: 1
                        , togglerAlign_open: "right"
                        , togglerAlign_closed: "right"
                    }
                    , south: {
                        size: 24
                        , initClosed: false
                        , togglerAlign_open: "left"
                        , togglerAlign_closed: "left"
                        , spacing_closed: 0
                        , spacing_open: 0
                        , initHidden: true
                        //, initClosed: true  

                    }
                    , center: {
                        size: '100%'
                    }

                    , east: {
                        size: 30
                        , min_Size: 30
                        , max_Height: 58
                        , initClosed: true
                        , spacing_open: 10
                        , spacing_closed: 10
                        , slidable: true
                        , slideDelay_open: 2
                        , togglerAlign_open: "top"
                        , togglerAlign_closed: "top"
                        , initHidden: true
                    }
                }
            }
        }
    }
    , south: {

        paneSelector: "#outer-south"
        , slidable: false
        , togglerContent_open: '<i class="tglr-arw  to_dwn"></i>'
        , togglerContent_closed: '<i class="tglr-arw to_up"></i>'
        , size: '2%'
        , initClosed: false
        , togglerAlign_open: "right"
        , togglerAlign_closed: "right"
        , closable: false
        , spacing_closed: 0
        , spacing_open: 0
    }
    , west: {
        paneSelector: "#outer-west"
        , size: '3.9%'
        , minSize: 26, closable: true
        , resizable: false
        , spacing_open: 0
        , spacing_closed: 0
    }
    , east: {
        paneSelector: "#outer-east"
        , initClosed: true
        , initHidden: false
        , size: '4%'
    }
};
  constructor()
   {
    $(document).ready( () =>{
      $('#managedlayout').layout(this.OuterLayoutOptions);
      });
    }

  ngOnInit() {
  }

}
