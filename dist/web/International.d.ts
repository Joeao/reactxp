/**
 * International.ts
 *
 * Copyright (c) Microsoft Corporation. All rights reserved.
 * Licensed under the MIT license.
 *
 * Web-specific implementation for i18n.
 */
import * as RX from '../common/Interfaces';
export declare class International implements RX.International {
    allowRTL(allow: boolean): void;
    forceRTL(force: boolean): void;
    isRTL(): boolean;
}
declare const _default: International;
export default _default;
