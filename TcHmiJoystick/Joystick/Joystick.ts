/*
 * Generated 5/23/2024 4:07:55 PM
 * Copyright (C) 2024
 */

declare var JoyStick: any;

module TcHmi {
    export module Controls {
        export module TcHmiJoystick {
            export class Joystick extends TcHmi.Controls.System.TcHmiControl {

                /*
                Attribute philosophy
                --------------------
                - Local variables are not set in the class definition, so they have the value 'undefined'.
                - During compilation, the Framework sets the value that is specified in the HTML or in the theme (possibly 'null') via normal setters.
                - Because of the "changed detection" in the setter, the value is only processed once during compilation.
                - Attention: If we have a Server Binding on an Attribute, the setter will be called once with null to initialize and later with the correct value.
                */

                /**
                 * Constructor of the control
                 * @param {JQuery} element Element from HTML (internal, do not use)
                 * @param {JQuery} pcElement precompiled Element (internal, do not use)
                 * @param {TcHmi.Controls.ControlAttributeList} attrs Attributes defined in HTML in a special format (internal, do not use)
                 * @returns {void}
                 */
                constructor(element: JQuery, pcElement: JQuery, attrs: TcHmi.Controls.ControlAttributeList) {
                    /** Call base class constructor */
                    super(element, pcElement, attrs);
                }

                protected __elementTemplateRoot!: JQuery;
                protected __joystick: any;
                protected __x: number;
                protected __y: number;
                protected __onUserInteractionMovedEvent: any;

                /**
                 * Raised after the control was added to the control cache and the constructors of all base classes were called.
                 */
                public __previnit() {
                    // Fetch template root element
                    this.__elementTemplateRoot = this.__element.find('.TcHmi_Controls_TcHmiJoystick_Joystick-Template');
                    if (this.__elementTemplateRoot.length === 0) {
                        throw new Error('Invalid Template.html');
                    }
                    // Call __previnit of base class
                    super.__previnit();
                }
                /**
                 * Is called during control initialization after the attribute setters have been called. 
                 * @returns {void}
                 */
                public __init() {
                    super.__init();

                    this.__elementTemplateRoot.on('mousemove', () => {
                        TcHmi.EventProvider.raise(this.__id + '.onUserInteractionMoved');
                    });

                    this.__elementTemplateRoot.on('touchmove', () => {
                        TcHmi.EventProvider.raise(this.__id + '.onUserInteractionMoved');
                    });
                }

                /**
                 * Is called by the system after the control instance is inserted into the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                public __attach() {
                    super.__attach();

                    /**
                     * Initialize everything which is only available while the control is part of the active dom.
                     */

                    this.__joystick = new JoyStick('joyDiv');

                    this.__onUserInteractionMovedEvent = TcHmi.EventProvider.register(this.__id + '.onUserInteractionMoved', this.__onUserInteractionMoved());
                }

                /**
                 * Is called by the system when the control instance is no longer part of the active DOM.
                 * Is only allowed to be called from the framework itself!
                 */
                public __detach() {
                    super.__detach();

                    /**
                     * Disable everything that is not needed while the control is not part of the active DOM.
                     * For example, there is usually no need to listen for events!
                     */
                    this.__onUserInteractionMovedEvent = null;
                }

                /**
                 * Destroy the current control instance. 
                 * Will be called automatically if system destroys control!
                 */
                public destroy() {
                    /**
                     * Ignore while __keepAlive is set to true.
                     */
                    if (this.__keepAlive) {
                        return;
                    }

                    super.destroy();

                    /**
                     * Free resources like child controls etc.
                     */
                }

                protected __onUserInteractionMoved() {
                    return (evt: any) => {
                        this.setX(this.__joystick.GetX());
                        this.setY(this.__joystick.GetY());
                    }
                }

                public setX(valueNew: number | null): void {
                    // convert the value with the value converter
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('X') as number;
                    }

                    if (tchmi_equal(convertedValue, this.__x)) {
                        // skip processing when the value has not changed
                        return;
                    }

                    // remember the new value
                    this.__x = convertedValue;

                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'X' });

                    // call process function to process the new value
                    this.__processX();
                }

                public getX() {
                    return this.__x;
                }

                protected __processX() {
                    
                }


                public setY(valueNew: number | null): void {
                    // convert the value with the value converter
                    let convertedValue = TcHmi.ValueConverter.toNumber(valueNew);

                    // check if the converted value is valid
                    if (convertedValue === null) {
                        // if we have no value to set we have to fall back to the defaultValueInternal from description.json
                        convertedValue = this.getAttributeDefaultValueInternal('Y') as number;
                    }

                    if (tchmi_equal(convertedValue, this.__y)) {
                        // skip processing when the value has not changed
                        return;
                    }

                    // remember the new value
                    this.__y = convertedValue;

                    // inform the system that the function has a changed result.
                    TcHmi.EventProvider.raise(this.__id + '.onPropertyChanged', { propertyName: 'Y' });

                    // call process function to process the new value
                    this.__processY();
                }

                public getY() {
                    return this.__y;
                }

                protected __processY() {
                                     
                }
            }
        }
    }
}

/**
 * Register Control
 */
TcHmi.Controls.registerEx('Joystick', 'TcHmi.Controls.TcHmiJoystick', TcHmi.Controls.TcHmiJoystick.Joystick);
