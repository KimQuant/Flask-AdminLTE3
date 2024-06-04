/**
 * @license Copyright (c) 2003-2024, CKSource Holding sp. z o.o. All rights reserved.
 * For licensing, see LICENSE.md or https://ckeditor.com/legal/ckeditor-oss-license
 */
/**
 * @module utils/dom/remove
 */
/**
 * Removes given node from parent.
 *
 * @param node Node to remove.
 */
export default function remove(node) {
    const parent = node.parentNode;
    if (parent) {
        parent.removeChild(node);
    }
}
