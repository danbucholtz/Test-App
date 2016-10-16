/**
 * This file is generated by the Angular 2 template compiler.
 * Do not edit.
 */
 /* tslint:disable */

import * as import0 from '@angular/core/src/render/api';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/linker/element';
import * as import3 from './posts';
import * as import4 from '@angular/core/src/linker/view_utils';
import * as import5 from '@angular/core/src/di/injector';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/change_detection/change_detection';
import * as import8 from 'ionic-angular/navigation/nav-params';
import * as import9 from 'ionic-angular/navigation/nav-controller';
import * as import10 from '../../providers/wp-provider/wp-provider';
import * as import11 from '../../providers/util-provider/util-provider';
import * as import12 from 'ionic-angular/util/events';
import * as import13 from '@angular/core/src/metadata/view';
import * as import14 from '@angular/core/src/linker/component_factory';
import * as import15 from 'ionic-angular/components/toolbar/toolbar';
import * as import16 from 'ionic-angular/components/navbar/navbar';
import * as import17 from '@angular/common/src/directives/ng_if';
import * as import18 from 'ionic-angular/components/toolbar/toolbar-item';
import * as import19 from '@angular/core/src/linker/query_list';
import * as import20 from 'ionic-angular/components/content/content';
import * as import21 from 'ionic-angular/components/list/list';
import * as import22 from '@angular/common/src/directives/ng_for';
import * as import23 from 'ionic-angular/components/infinite-scroll/infinite-scroll';
import * as import24 from 'ionic-angular/components/infinite-scroll/infinite-scroll-content';
import * as import25 from 'ionic-angular/config/config';
import * as import26 from '@angular/core/src/linker/element_ref';
import * as import27 from 'ionic-angular/navigation/view-controller';
import * as import28 from '../../../node_modules/ionic-angular/components/navbar/navbar.ngfactory';
import * as import29 from 'ionic-angular/components/app/app';
import * as import30 from '@angular/core/src/linker/template_ref';
import * as import31 from '../../../node_modules/ionic-angular/components/content/content.ngfactory';
import * as import32 from 'ionic-angular/util/keyboard';
import * as import33 from '@angular/core/src/zone/ng_zone';
import * as import34 from 'ionic-angular/components/tabs/tabs';
import * as import35 from 'ionic-angular/gestures/gesture-controller';
import * as import36 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import37 from '../../../node_modules/ionic-angular/components/infinite-scroll/infinite-scroll-content.ngfactory';
import * as import38 from 'ionic-angular/components/toolbar/toolbar-title';
import * as import39 from '../../../node_modules/ionic-angular/components/toolbar/toolbar-title.ngfactory';
import * as import40 from '../../components/post/post';
import * as import41 from '../../components/post/post.ngfactory';
var renderType_PostsPage_Host:import0.RenderComponentType = (null as any);
class _View_PostsPage_Host0 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PostsPage_0_4:import3.PostsPage;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PostsPage_Host0,renderType_PostsPage_Host,import6.ViewType.HOST,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.selectOrCreateHostElement('ng-component',rootSelector,(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = viewFactory_PostsPage0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PostsPage_0_4 = new import3.PostsPage(this.parentInjector.get(import8.NavParams),this.parentInjector.get(import9.NavController),this.parentInjector.get(import10.WpProvider),this.parentInjector.get(import11.UtilProvider),this.parentInjector.get(import12.Events));
    this._appEl_0.initComponent(this._PostsPage_0_4,([] as any[]),compView_0);
    compView_0.create(this._PostsPage_0_4,this.projectableNodes,(null as any));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],([] as any[]),([] as any[]));
    return this._appEl_0;
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import3.PostsPage) && (0 === requestNodeIndex))) { return this._PostsPage_0_4; }
    return notFoundResult;
  }
}
function viewFactory_PostsPage_Host0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  if ((renderType_PostsPage_Host === (null as any))) { (renderType_PostsPage_Host = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,([] as any[]),{})); }
  return new _View_PostsPage_Host0(viewUtils,parentInjector,declarationEl);
}
export const PostsPageNgFactory:import14.ComponentFactory<import3.PostsPage> = new import14.ComponentFactory<import3.PostsPage>('ng-component',viewFactory_PostsPage_Host0,import3.PostsPage);
const styles_PostsPage:any[] = ([] as any[]);
var renderType_PostsPage:import0.RenderComponentType = (null as any);
class _View_PostsPage0 extends import1.AppView<import3.PostsPage> {
  _el_0:any;
  _Header_0_3:import15.Header;
  _text_1:any;
  _el_2:any;
  /*private*/ _appEl_2:import2.AppElement;
  _Navbar_2_4:import16.Navbar;
  _text_3:any;
  _anchor_4:any;
  /*private*/ _appEl_4:import2.AppElement;
  _TemplateRef_4_5:any;
  _NgIf_4_6:import17.NgIf;
  _text_5:any;
  _anchor_6:any;
  /*private*/ _appEl_6:import2.AppElement;
  _TemplateRef_6_5:any;
  _NgIf_6_6:import17.NgIf;
  _text_7:any;
  _el_8:any;
  _ToolbarItem_8_3:import18.ToolbarItem;
  _query_Button_8_0:import19.QueryList<any>;
  _text_9:any;
  _text_10:any;
  _text_11:any;
  _text_12:any;
  _text_13:any;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  /*private*/ _appEl_16:import2.AppElement;
  _Content_16_4:import20.Content;
  _text_17:any;
  _text_18:any;
  _el_19:any;
  _List_19_3:import21.List;
  _text_20:any;
  _anchor_21:any;
  /*private*/ _appEl_21:import2.AppElement;
  _TemplateRef_21_5:any;
  _NgFor_21_6:import22.NgFor;
  _text_22:any;
  _text_23:any;
  _el_24:any;
  _InfiniteScroll_24_3:import23.InfiniteScroll;
  _text_25:any;
  _el_26:any;
  /*private*/ _appEl_26:import2.AppElement;
  _InfiniteScrollContent_26_4:import24.InfiniteScrollContent;
  _text_27:any;
  _text_28:any;
  _text_29:any;
  /*private*/ _expr_0:any;
  /*private*/ _expr_1:any;
  /*private*/ _expr_2:any;
  /*private*/ _expr_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  /*private*/ _expr_8:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PostsPage0,renderType_PostsPage,import6.ViewType.COMPONENT,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    const parentRenderNode:any = this.renderer.createViewRoot(this.declarationAppElement.nativeElement);
    this._el_0 = this.renderer.createElement(parentRenderNode,'ion-header',(null as any));
    this._Header_0_3 = new import15.Header(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_0),this.renderer,this.parentInjector.get(import27.ViewController,(null as any)));
    this._text_1 = this.renderer.createText(this._el_0,'\n  ',(null as any));
    this._el_2 = this.renderer.createElement(this._el_0,'ion-navbar',(null as any));
    this.renderer.setElementAttribute(this._el_2,'class','toolbar');
    this.renderer.setElementAttribute(this._el_2,'color','primary');
    this._appEl_2 = new import2.AppElement(2,0,this,this._el_2);
    var compView_2:any = import28.viewFactory_Navbar0(this.viewUtils,this.injector(2),this._appEl_2);
    this._Navbar_2_4 = new import16.Navbar(this.parentInjector.get(import29.App),this.parentInjector.get(import27.ViewController,(null as any)),this.parentInjector.get(import9.NavController,(null as any)),this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_2),this.renderer);
    this._appEl_2.initComponent(this._Navbar_2_4,([] as any[]),compView_2);
    this._text_3 = this.renderer.createText((null as any),'  \n    ',(null as any));
    this._anchor_4 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_4 = new import2.AppElement(4,2,this,this._anchor_4);
    this._TemplateRef_4_5 = new import30.TemplateRef_(this._appEl_4,viewFactory_PostsPage1);
    this._NgIf_4_6 = new import17.NgIf(this._appEl_4.vcRef,this._TemplateRef_4_5);
    this._text_5 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._anchor_6 = this.renderer.createTemplateAnchor((null as any),(null as any));
    this._appEl_6 = new import2.AppElement(6,2,this,this._anchor_6);
    this._TemplateRef_6_5 = new import30.TemplateRef_(this._appEl_6,viewFactory_PostsPage2);
    this._NgIf_6_6 = new import17.NgIf(this._appEl_6.vcRef,this._TemplateRef_6_5);
    this._text_7 = this.renderer.createText((null as any),'\n    ',(null as any));
    this._el_8 = this.renderer.createElement((null as any),'ion-buttons',(null as any));
    this.renderer.setElementAttribute(this._el_8,'end','');
    this._ToolbarItem_8_3 = new import18.ToolbarItem(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_8),this.renderer,this.parentInjector.get(import15.Toolbar,(null as any)),this._Navbar_2_4);
    this._query_Button_8_0 = new import19.QueryList<any>();
    this._text_9 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._text_10 = this.renderer.createText(this._el_8,'\n      ',(null as any));
    this._text_11 = this.renderer.createText(this._el_8,'\n    ',(null as any));
    this._text_12 = this.renderer.createText((null as any),'\n  ',(null as any));
    compView_2.create(this._Navbar_2_4,[
      ([] as any[]),
      ([] as any[]),
      ([] as any[]).concat([this._el_8]),
      ([] as any[]).concat([
        this._text_3,
        this._appEl_4,
        this._text_5,
        this._appEl_6,
        this._text_7,
        this._text_12
      ]
      )
    ]
    ,(null as any));
    this._text_13 = this.renderer.createText(this._el_0,'\n\n  ',(null as any));
    this._text_14 = this.renderer.createText(this._el_0,'\n\n',(null as any));
    this._text_15 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_16 = this.renderer.createElement(parentRenderNode,'ion-content',(null as any));
    this.renderer.setElementAttribute(this._el_16,'class','posts outer-content');
    this._appEl_16 = new import2.AppElement(16,(null as any),this,this._el_16);
    var compView_16:any = import31.viewFactory_Content0(this.viewUtils,this.injector(16),this._appEl_16);
    this._Content_16_4 = new import20.Content(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_16),this.renderer,this.parentInjector.get(import29.App),this.parentInjector.get(import32.Keyboard),this.parentInjector.get(import33.NgZone),this.parentInjector.get(import27.ViewController,(null as any)),this.parentInjector.get(import34.Tabs,(null as any)));
    this._appEl_16.initComponent(this._Content_16_4,([] as any[]),compView_16);
    this._text_17 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._text_18 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_19 = this.renderer.createElement((null as any),'ion-list',(null as any));
    this._List_19_3 = new import21.List(this.parentInjector.get(import25.Config),new import26.ElementRef(this._el_19),this.renderer,this.parentInjector.get(import35.GestureController));
    this._text_20 = this.renderer.createText(this._el_19,'\n  ',(null as any));
    this._anchor_21 = this.renderer.createTemplateAnchor(this._el_19,(null as any));
    this._appEl_21 = new import2.AppElement(21,19,this,this._anchor_21);
    this._TemplateRef_21_5 = new import30.TemplateRef_(this._appEl_21,viewFactory_PostsPage3);
    this._NgFor_21_6 = new import22.NgFor(this._appEl_21.vcRef,this._TemplateRef_21_5,this.parentInjector.get(import36.IterableDiffers),this.ref);
    this._text_22 = this.renderer.createText(this._el_19,'\n  ',(null as any));
    this._text_23 = this.renderer.createText((null as any),'\n  ',(null as any));
    this._el_24 = this.renderer.createElement((null as any),'ion-infinite-scroll',(null as any));
    this._InfiniteScroll_24_3 = new import23.InfiniteScroll(this._Content_16_4,this.parentInjector.get(import33.NgZone),new import26.ElementRef(this._el_24));
    this._text_25 = this.renderer.createText(this._el_24,'\n   ',(null as any));
    this._el_26 = this.renderer.createElement(this._el_24,'ion-infinite-scroll-content',(null as any));
    this._appEl_26 = new import2.AppElement(26,24,this,this._el_26);
    var compView_26:any = import37.viewFactory_InfiniteScrollContent0(this.viewUtils,this.injector(26),this._appEl_26);
    this._InfiniteScrollContent_26_4 = new import24.InfiniteScrollContent(this._InfiniteScroll_24_3,this.parentInjector.get(import25.Config));
    this._appEl_26.initComponent(this._InfiniteScrollContent_26_4,([] as any[]),compView_26);
    compView_26.create(this._InfiniteScrollContent_26_4,([] as any[]),(null as any));
    this._text_27 = this.renderer.createText(this._el_24,'\n  ',(null as any));
    this._text_28 = this.renderer.createText((null as any),'\n',(null as any));
    compView_16.create(this._Content_16_4,[
      ([] as any[]),
      ([] as any[]).concat([
        this._text_17,
        this._text_18,
        this._el_19,
        this._text_23,
        this._el_24,
        this._text_28
      ]
      ),
      ([] as any[])
    ]
    ,(null as any));
    this._text_29 = this.renderer.createText(parentRenderNode,'\n',(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this._expr_1 = import7.UNINITIALIZED;
    this._expr_2 = import7.UNINITIALIZED;
    this._expr_3 = import7.UNINITIALIZED;
    this._expr_4 = import7.UNINITIALIZED;
    this._expr_5 = import7.UNINITIALIZED;
    this._expr_6 = import7.UNINITIALIZED;
    var disposable_0:Function = this.renderer.listen(this._el_24,'ionInfinite',this.eventHandler(this._handle_ionInfinite_24_0.bind(this)));
    const subscription_0:any = this._InfiniteScroll_24_3.ionInfinite.subscribe(this.eventHandler(this._handle_ionInfinite_24_0.bind(this)));
    this._expr_8 = import7.UNINITIALIZED;
    this.init(([] as any[]),[
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._anchor_4,
      this._text_5,
      this._anchor_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._text_11,
      this._text_12,
      this._text_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._el_19,
      this._text_20,
      this._anchor_21,
      this._text_22,
      this._text_23,
      this._el_24,
      this._text_25,
      this._el_26,
      this._text_27,
      this._text_28,
      this._text_29
    ]
    ,[disposable_0],[subscription_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import30.TemplateRef) && (4 === requestNodeIndex))) { return this._TemplateRef_4_5; }
    if (((token === import17.NgIf) && (4 === requestNodeIndex))) { return this._NgIf_4_6; }
    if (((token === import30.TemplateRef) && (6 === requestNodeIndex))) { return this._TemplateRef_6_5; }
    if (((token === import17.NgIf) && (6 === requestNodeIndex))) { return this._NgIf_6_6; }
    if (((token === import18.ToolbarItem) && ((8 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._ToolbarItem_8_3; }
    if (((token === import16.Navbar) && ((2 <= requestNodeIndex) && (requestNodeIndex <= 12)))) { return this._Navbar_2_4; }
    if (((token === import15.Header) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._Header_0_3; }
    if (((token === import30.TemplateRef) && (21 === requestNodeIndex))) { return this._TemplateRef_21_5; }
    if (((token === import22.NgFor) && (21 === requestNodeIndex))) { return this._NgFor_21_6; }
    if (((token === import21.List) && ((19 <= requestNodeIndex) && (requestNodeIndex <= 22)))) { return this._List_19_3; }
    if (((token === import24.InfiniteScrollContent) && (26 === requestNodeIndex))) { return this._InfiniteScrollContent_26_4; }
    if (((token === import23.InfiniteScroll) && ((24 <= requestNodeIndex) && (requestNodeIndex <= 27)))) { return this._InfiniteScroll_24_3; }
    if (((token === import20.Content) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 28)))) { return this._Content_16_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    var changes:{[key: string]:import7.SimpleChange} = (null as any);
    const currVal_0:any = 'primary';
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this._Navbar_2_4.color = currVal_0;
      this._expr_0 = currVal_0;
    }
    const currVal_3:boolean = !this.context.category;
    if (import4.checkBinding(throwOnChange,this._expr_3,currVal_3)) {
      this._NgIf_4_6.ngIf = currVal_3;
      this._expr_3 = currVal_3;
    }
    const currVal_4:any = this.context.category;
    if (import4.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this._NgIf_6_6.ngIf = currVal_4;
      this._expr_4 = currVal_4;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._Content_16_4.ngOnInit(); }
    changes = (null as any);
    const currVal_6:any = this.context.posts;
    if (import4.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this._NgFor_21_6.ngForOf = currVal_6;
      if ((changes === (null as any))) { (changes = {}); }
      changes['ngForOf'] = new import7.SimpleChange(this._expr_6,currVal_6);
      this._expr_6 = currVal_6;
    }
    if ((changes !== (null as any))) { this._NgFor_21_6.ngOnChanges(changes); }
    if (!throwOnChange) { this._NgFor_21_6.ngDoCheck(); }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._InfiniteScrollContent_26_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    if (!throwOnChange) {
      if (this._query_Button_8_0.dirty) {
        this._query_Button_8_0.reset(([] as any[]));
        this._ToolbarItem_8_3._buttons = this._query_Button_8_0;
        this._query_Button_8_0.notifyOnChanges();
      }
      if ((this.numberOfChecks === 0)) { this._InfiniteScroll_24_3.ngAfterContentInit(); }
    }
    const currVal_1:any = this._Navbar_2_4._hidden;
    if (import4.checkBinding(throwOnChange,this._expr_1,currVal_1)) {
      this.renderer.setElementProperty(this._el_2,'hidden',currVal_1);
      this._expr_1 = currVal_1;
    }
    const currVal_2:any = this._Navbar_2_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this.renderer.setElementClass(this._el_2,'statusbar-padding',currVal_2);
      this._expr_2 = currVal_2;
    }
    const currVal_5:any = this._Content_16_4._sbPadding;
    if (import4.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setElementClass(this._el_16,'statusbar-padding',currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_8:any = this._InfiniteScrollContent_26_4.inf.state;
    if (import4.checkBinding(throwOnChange,this._expr_8,currVal_8)) {
      this.renderer.setElementAttribute(this._el_26,'state',((currVal_8 == (null as any))? (null as any): currVal_8.toString()));
      this._expr_8 = currVal_8;
    }
    this.detectViewChildrenChanges(throwOnChange);
    if (!throwOnChange) { if ((this.numberOfChecks === 0)) { this._Navbar_2_4.ngAfterViewInit(); } }
  }
  destroyInternal():void {
    this._InfiniteScroll_24_3.ngOnDestroy();
    this._Content_16_4.ngOnDestroy();
  }
  private _handle_ionInfinite_24_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.context.loadMore($event)) !== false);
    return (true && pd_0);
  }
}
export function viewFactory_PostsPage0(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<import3.PostsPage> {
  if ((renderType_PostsPage === (null as any))) { (renderType_PostsPage = viewUtils.createRenderComponentType('',0,import13.ViewEncapsulation.None,styles_PostsPage,{})); }
  return new _View_PostsPage0(viewUtils,parentInjector,declarationEl);
}
class _View_PostsPage1 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ToolbarTitle_0_4:import38.ToolbarTitle;
  _text_1:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PostsPage1,renderType_PostsPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import39.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ToolbarTitle_0_4 = new import38.ToolbarTitle(this.parent.parentInjector.get(import25.Config),new import26.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import15.Toolbar,(null as any)),(<_View_PostsPage0>this.parent)._Navbar_2_4);
    this._appEl_0.initComponent(this._ToolbarTitle_0_4,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'Crossdressing Captions',(null as any));
    compView_0.create(this._ToolbarTitle_0_4,[([] as any[]).concat([this._text_1])],(null as any));
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.ToolbarTitle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ToolbarTitle_0_4; }
    return notFoundResult;
  }
}
function viewFactory_PostsPage1(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PostsPage1(viewUtils,parentInjector,declarationEl);
}
class _View_PostsPage2 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _ToolbarTitle_0_4:import38.ToolbarTitle;
  _text_1:any;
  /*private*/ _expr_0:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PostsPage2,renderType_PostsPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'ion-title',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import39.viewFactory_ToolbarTitle0(this.viewUtils,this.injector(0),this._appEl_0);
    this._ToolbarTitle_0_4 = new import38.ToolbarTitle(this.parent.parentInjector.get(import25.Config),new import26.ElementRef(this._el_0),this.renderer,this.parent.parentInjector.get(import15.Toolbar,(null as any)),(<_View_PostsPage0>this.parent)._Navbar_2_4);
    this._appEl_0.initComponent(this._ToolbarTitle_0_4,([] as any[]),compView_0);
    this._text_1 = this.renderer.createText((null as any),'',(null as any));
    compView_0.create(this._ToolbarTitle_0_4,[([] as any[]).concat([this._text_1])],(null as any));
    this._expr_0 = import7.UNINITIALIZED;
    this.init(([] as any[]).concat([this._el_0]),[
      this._el_0,
      this._text_1
    ]
    ,([] as any[]),([] as any[]));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import38.ToolbarTitle) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 1)))) { return this._ToolbarTitle_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this.detectContentChildrenChanges(throwOnChange);
    const currVal_0:any = import4.interpolate(1,'',this.parent.context.category.name,'');
    if (import4.checkBinding(throwOnChange,this._expr_0,currVal_0)) {
      this.renderer.setText(this._text_1,currVal_0);
      this._expr_0 = currVal_0;
    }
    this.detectViewChildrenChanges(throwOnChange);
  }
}
function viewFactory_PostsPage2(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PostsPage2(viewUtils,parentInjector,declarationEl);
}
class _View_PostsPage3 extends import1.AppView<any> {
  _el_0:any;
  /*private*/ _appEl_0:import2.AppElement;
  _PostCmp_0_4:import40.PostCmp;
  /*private*/ _expr_2:any;
  constructor(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement) {
    super(_View_PostsPage3,renderType_PostsPage,import6.ViewType.EMBEDDED,viewUtils,parentInjector,declarationEl,import7.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import2.AppElement {
    this._el_0 = this.renderer.createElement((null as any),'post',(null as any));
    this._appEl_0 = new import2.AppElement(0,(null as any),this,this._el_0);
    var compView_0:any = import41.viewFactory_PostCmp0(this.viewUtils,this.injector(0),this._appEl_0);
    this._PostCmp_0_4 = new import40.PostCmp(this.parent.parentInjector.get(import10.WpProvider));
    this._appEl_0.initComponent(this._PostCmp_0_4,([] as any[]),compView_0);
    compView_0.create(this._PostCmp_0_4,([] as any[]),(null as any));
    var disposable_0:Function = this.renderer.listen(this._el_0,'favorite',this.eventHandler(this._handle_favorite_0_0.bind(this)));
    var disposable_1:Function = this.renderer.listen(this._el_0,'read',this.eventHandler(this._handle_read_0_1.bind(this)));
    this._expr_2 = import7.UNINITIALIZED;
    const subscription_0:any = this._PostCmp_0_4.read.subscribe(this.eventHandler(this._handle_read_0_1.bind(this)));
    const subscription_1:any = this._PostCmp_0_4.favorite.subscribe(this.eventHandler(this._handle_favorite_0_0.bind(this)));
    this.init(([] as any[]).concat([this._el_0]),[this._el_0],[
      disposable_0,
      disposable_1
    ]
    ,[
      subscription_0,
      subscription_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import40.PostCmp) && (0 === requestNodeIndex))) { return this._PostCmp_0_4; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_2:any = this.context.$implicit;
    if (import4.checkBinding(throwOnChange,this._expr_2,currVal_2)) {
      this._PostCmp_0_4.postData = currVal_2;
      this._expr_2 = currVal_2;
    }
    if (((this.numberOfChecks === 0) && !throwOnChange)) { this._PostCmp_0_4.ngOnInit(); }
    this.detectContentChildrenChanges(throwOnChange);
    this.detectViewChildrenChanges(throwOnChange);
  }
  private _handle_favorite_0_0($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.favorite($event)) !== false);
    return (true && pd_0);
  }
  private _handle_read_0_1($event:any):boolean {
    this.markPathToRootAsCheckOnce();
    const pd_0:any = ((<any>this.parent.context.read($event)) !== false);
    return (true && pd_0);
  }
}
function viewFactory_PostsPage3(viewUtils:import4.ViewUtils,parentInjector:import5.Injector,declarationEl:import2.AppElement):import1.AppView<any> {
  return new _View_PostsPage3(viewUtils,parentInjector,declarationEl);
}