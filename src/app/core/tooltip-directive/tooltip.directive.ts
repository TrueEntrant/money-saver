import {
  ComponentFactoryResolver,
  ComponentRef,
  Directive,
  ElementRef,
  HostListener,
  Input,
  ViewContainerRef,
  Renderer2,
  Injector
} from '@angular/core';
import { TooltipInterface, TooltipPosition } from './tooltip.interface';
import { MoneyTooltipComponent } from './tooltip.component';

@Directive({
  selector: '[money-tooltip]'
})
export class TooltipDirective {
  private componentRef: ComponentRef<MoneyTooltipComponent>;
  @Input()
  public tooltipOptions: TooltipInterface = this.initialOptions;
  @Input()
  public showOnClick: boolean = this.tooltipOptions.showOnClick;
  @Input()
  public autoShowHide: boolean = this.tooltipOptions.autoShowHide;
  @Input()
  public appendToBody: boolean = this.tooltipOptions.appendToBody;
  @Input()
  public template: any = this.tooltipOptions.template;
  @Input()
  public isCloseBtn: boolean = this.tooltipOptions.isCloseBtn;
  @Input()
  public position: TooltipPosition = this.tooltipOptions.position;

  isClear = true;
  get initialOptions(): TooltipInterface {
    return {
      template: 'Hello',
      autoShowHide: false,
      showOnClick: false,
      appendToBody: false,
      isCloseBtn: false,
      position: 'top'
    };
  }
  constructor(
    private componentFactoryResolver: ComponentFactoryResolver,
    private vRef: ViewContainerRef,
    private renderer: Renderer2,
    private ef: ElementRef
  ) {}

  @HostListener('mouseover', ['$event'])
  onMouseOver(e) {
    if (!this.isClear || this.showOnClick) {
      return;
    }
    this.initTooltip();
  }

  @HostListener('mouseleave', ['$event'])
  onMouseLeave(e) {
    this.componentRef.destroy();
    this.isClear = true;
  }

  initTooltip() {
    const injector = Injector.create({
      providers: [
        {
          provide: 'tooltipConfig',
          useValue: {
            host: this.ef.nativeElement
          }
        }
      ]
    });
    let componentFactory: any;
    componentFactory = this.componentFactoryResolver.resolveComponentFactory(
      MoneyTooltipComponent
    );
    this.componentRef = this.vRef.createComponent(
      componentFactory,
      0,
      injector,
      this.generateNgContent()
    );
    this.componentRef.instance.template = this.template;
    this.ef.nativeElement.appendChild(this.componentRef.location.nativeElement);
    this.isClear = false;
  }

  private generateNgContent() {
    if (typeof this.template === 'string') {
      const element = this.renderer.createText(this.template);
      return [[element]];
    }
  }
}
