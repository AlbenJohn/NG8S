import { Component, OnInit,HostListener } from '@angular/core';
import * as $ from 'jquery';
import { PlatformLocation } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public manageLayoutOptions = {
      name:'innerlayout',
    center: {
        paneSelector: "#inner_center"
,
        resizable:true
        , livePaneResizing: true
        , resizeWithWindow: true
        
    },
   
 north: {
        paneSelector: "#inner-north"
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
                paneSelector: ".inner_header"
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
,  south: {
    paneSelector:"#inner_south"
    ,size: 100,
    maxHeight: 100
    , spacing_open: 0
    , spacing_closed: 0
    , initClosed: false
    , slidable: false
    , resizable: false
    , togglerContent_open: '<i class="tglr-arw  to_dwn"></i>'
    , togglerContent_closed: '<i class="tglr-arw to_up"></i>'
   }
   ,west:{
  
     initClosed: true
    , initHidden: true
    
   }
   ,east:{
      initClosed:true
      , initHidden: true
   }
  }

  public OuterLayoutOptions = {
     center: {
        paneSelector: "#outer-center"
        ,resizable:true
        , livePaneResizing: true
        , resizeWithWindow: true
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
        , size: '200'
        , initClosed: false
        , initHidden: false
        , resizable: true
       
    }
    , east: {
        paneSelector: "#outer-east"
        , size: '200'
        , initClosed: false
        , initHidden: false
    }
    , onresizeall_end: function () {

    }
};




innerLayout;
public lfpaenabled:boolean = true;
  constructor(public location: PlatformLocation)
   {
    $(document).ready( () =>{
  this.innerLayout =    $('#managedlayout').layout(this.OuterLayoutOptions);
    //   $("#outer-west-resizer").hide();
      $('#innerLayoutOptions').layout(this.manageLayoutOptions);
      });
      location.onPopState(() => {
        console.log('pressed back in add!!!!!');
        //this.router.navigateByUrl(‘/multicomponent’);
        history.forward();
        });
    }
    // @HostListener('window:popstate', ['$event'])
    // onPopState(event) {
    //   console.log('Back button pressed');
    //   event.his
    // }
  ngOnInit() {
  }
  menucliked(){

    this.lfpaenabled = !this.lfpaenabled;
        if(!this.lfpaenabled){           
            this.innerLayout.close('west')
        }
        else{
            this.innerLayout.open('west')
        }
    

  }
}
