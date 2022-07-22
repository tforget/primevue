import { ClassComponent, GlobalComponentConstructor, Nullable } from '../ts-helpers';

export interface TriStateCheckboxProps {
    /**
     * Value of the component.
     */
    modelValue?: Nullable<boolean>;
    /**
     * 	Inline style of the component.
     */
    style?: any;
    /**
     * Style class of the component.
     */
    class?: any;
    /**
     * Establishes relationships between the component and label(s) where its value should be one or more element IDs.
     */
    'aria-labelledby'?: string | undefined;
    /**
      * Establishes a string value that labels the component.
      */
    'aria-label'?: string | undefined;
}

export interface TriStateCheckboxSlots {
}

export declare type TriStateCheckboxEmits = {
    /**
     * Emitted when the value changes.
     * @param {boolean|null|undefined} value - New value.
     */
    'update:modelValue': (value: Nullable<boolean>) => void;
}

declare class TriStateCheckbox extends ClassComponent<TriStateCheckboxProps, TriStateCheckboxSlots, TriStateCheckboxEmits> { }

declare module '@vue/runtime-core' {
    interface GlobalComponents {
        TriStateCheckbox: GlobalComponentConstructor<TriStateCheckbox>
    }
}

/**
 *
 * TriStateCheckbox is used to select either 'true', 'false' or 'null' as the value.
 *
 * Demos:
 *
 * - [TriStateCheckbox](https://www.primefaces.org/primevue/showcase/#/tristatecheckbox)
 *
 */
export default TriStateCheckbox;
