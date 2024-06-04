/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module ui/input/inputview
 */
import { type Locale } from '@ckeditor/ckeditor5-utils';
import InputBase from './inputbase.js';
import '../../theme/components/input/input.css';
/**
 * The input view class.
 */
export default class InputView extends InputBase {
    /**
     * Corresponds to the `inputmode` DOM attribute. Can be `text`, `numeric`, `decimal`, etc.
     *
     * @observable
     * @default 'text'
     */
    inputMode: string;
    /**
     * @inheritDoc
     */
    constructor(locale?: Locale);
}
/**
 * Fired when the user types in the input. Corresponds to the native
 * DOM `input` event.
 *
 * @eventName ~InputView#input
 */
export type InputViewInputEvent = {
    name: 'input';
    args: [InputEvent];
};