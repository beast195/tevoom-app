/**
 * @license
 * Copyright Google Inc. All Rights Reserved.
 *
 * Use of this source code is governed by an MIT-style license that can be
 * found in the LICENSE file at https://angular.io/license
 */
import * as tslib_1 from "tslib";
import { defineInjector } from '../di/defs';
import { convertInjectableProviderToFactory } from '../di/injectable';
import { R3_COMPILE_NGMODULE } from '../ivy_switch';
import { makeDecorator } from '../util/decorators';
/**
 * Defines a schema that allows an NgModule to contain the following:
 * - Non-Angular elements named with dash case (`-`).
 * - Element properties named with dash case (`-`).
 * Dash case is the naming convention for custom elements.
 *
 *
 */
export var CUSTOM_ELEMENTS_SCHEMA = {
    name: 'custom-elements'
};
/**
 * Defines a schema that allows any property on any element.
 *
 * @experimental
 */
export var NO_ERRORS_SCHEMA = {
    name: 'no-errors-schema'
};
function preR3NgModuleCompile(moduleType, metadata) {
    var imports = (metadata && metadata.imports) || [];
    if (metadata && metadata.exports) {
        imports = tslib_1.__spread(imports, [metadata.exports]);
    }
    moduleType.ngInjectorDef = defineInjector({
        factory: convertInjectableProviderToFactory(moduleType, { useClass: moduleType }),
        providers: metadata && metadata.providers,
        imports: imports,
    });
}
/**
 * @Annotation
 */
export var NgModule = makeDecorator('NgModule', function (ngModule) { return ngModule; }, undefined, undefined, 
/**
 * Decorator that marks the following class as an NgModule, and supplies
 * configuration metadata for it.
 *
 * * The `declarations` and `entryComponents` options configure the compiler
 * with information about what belongs to the NgModule.
 * * The `providers` options configures the NgModule's injector to provide
 * dependencies the NgModule members.
 * * The `imports` and `exports` options bring in members from other modules, and make
 * this module's members available to others.
 */
function (type, meta) { return (R3_COMPILE_NGMODULE || preR3NgModuleCompile)(type, meta); });

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibmdfbW9kdWxlLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vLi4vcGFja2FnZXMvY29yZS9zcmMvbWV0YWRhdGEvbmdfbW9kdWxlLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs7Ozs7R0FNRzs7QUFFSCxPQUFPLEVBQTRCLGNBQWMsRUFBQyxNQUFNLFlBQVksQ0FBQztBQUNyRSxPQUFPLEVBQUMsa0NBQWtDLEVBQUMsTUFBTSxrQkFBa0IsQ0FBQztBQUVwRSxPQUFPLEVBQUMsbUJBQW1CLEVBQUMsTUFBTSxlQUFlLENBQUM7QUFFbEQsT0FBTyxFQUFnQixhQUFhLEVBQUMsTUFBTSxvQkFBb0IsQ0FBQztBQWlGaEU7Ozs7Ozs7R0FPRztBQUNILE1BQU0sQ0FBQyxJQUFNLHNCQUFzQixHQUFtQjtJQUNwRCxJQUFJLEVBQUUsaUJBQWlCO0NBQ3hCLENBQUM7QUFFRjs7OztHQUlHO0FBQ0gsTUFBTSxDQUFDLElBQU0sZ0JBQWdCLEdBQW1CO0lBQzlDLElBQUksRUFBRSxrQkFBa0I7Q0FDekIsQ0FBQztBQW1ORiw4QkFBOEIsVUFBNkIsRUFBRSxRQUFrQjtJQUM3RSxJQUFJLE9BQU8sR0FBRyxDQUFDLFFBQVEsSUFBSSxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksRUFBRSxDQUFDO0lBQ25ELElBQUksUUFBUSxJQUFJLFFBQVEsQ0FBQyxPQUFPLEVBQUU7UUFDaEMsT0FBTyxvQkFBTyxPQUFPLEdBQUUsUUFBUSxDQUFDLE9BQU8sRUFBQyxDQUFDO0tBQzFDO0lBRUQsVUFBVSxDQUFDLGFBQWEsR0FBRyxjQUFjLENBQUM7UUFDeEMsT0FBTyxFQUFFLGtDQUFrQyxDQUFDLFVBQVUsRUFBRSxFQUFDLFFBQVEsRUFBRSxVQUFVLEVBQUMsQ0FBQztRQUMvRSxTQUFTLEVBQUUsUUFBUSxJQUFJLFFBQVEsQ0FBQyxTQUFTO1FBQ3pDLE9BQU8sRUFBRSxPQUFPO0tBQ2pCLENBQUMsQ0FBQztBQUNMLENBQUM7QUFFRDs7R0FFRztBQUNILE1BQU0sQ0FBQyxJQUFNLFFBQVEsR0FBc0IsYUFBYSxDQUNwRCxVQUFVLEVBQUUsVUFBQyxRQUFrQixJQUFLLE9BQUEsUUFBUSxFQUFSLENBQVEsRUFBRSxTQUFTLEVBQUUsU0FBUztBQUNsRTs7Ozs7Ozs7OztHQVVHO0FBQ0gsVUFBQyxJQUFlLEVBQUUsSUFBYyxJQUFLLE9BQUEsQ0FBQyxtQkFBbUIsSUFBSSxvQkFBb0IsQ0FBQyxDQUFDLElBQUksRUFBRSxJQUFJLENBQUMsRUFBekQsQ0FBeUQsQ0FBQyxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiLyoqXG4gKiBAbGljZW5zZVxuICogQ29weXJpZ2h0IEdvb2dsZSBJbmMuIEFsbCBSaWdodHMgUmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgYW4gTUlULXN0eWxlIGxpY2Vuc2UgdGhhdCBjYW4gYmVcbiAqIGZvdW5kIGluIHRoZSBMSUNFTlNFIGZpbGUgYXQgaHR0cHM6Ly9hbmd1bGFyLmlvL2xpY2Vuc2VcbiAqL1xuXG5pbXBvcnQge0luamVjdG9yRGVmLCBJbmplY3RvclR5cGUsIGRlZmluZUluamVjdG9yfSBmcm9tICcuLi9kaS9kZWZzJztcbmltcG9ydCB7Y29udmVydEluamVjdGFibGVQcm92aWRlclRvRmFjdG9yeX0gZnJvbSAnLi4vZGkvaW5qZWN0YWJsZSc7XG5pbXBvcnQge1Byb3ZpZGVyfSBmcm9tICcuLi9kaS9wcm92aWRlcic7XG5pbXBvcnQge1IzX0NPTVBJTEVfTkdNT0RVTEV9IGZyb20gJy4uL2l2eV9zd2l0Y2gnO1xuaW1wb3J0IHtUeXBlfSBmcm9tICcuLi90eXBlJztcbmltcG9ydCB7VHlwZURlY29yYXRvciwgbWFrZURlY29yYXRvcn0gZnJvbSAnLi4vdXRpbC9kZWNvcmF0b3JzJztcblxuLyoqXG4gKiBSZXByZXNlbnRzIHRoZSBleHBhbnNpb24gb2YgYW4gYE5nTW9kdWxlYCBpbnRvIGl0cyBzY29wZXMuXG4gKlxuICogQSBzY29wZSBpcyBhIHNldCBvZiBkaXJlY3RpdmVzIGFuZCBwaXBlcyB0aGF0IGFyZSB2aXNpYmxlIGluIGEgcGFydGljdWxhciBjb250ZXh0LiBFYWNoXG4gKiBgTmdNb2R1bGVgIGhhcyB0d28gc2NvcGVzLiBUaGUgYGNvbXBpbGF0aW9uYCBzY29wZSBpcyB0aGUgc2V0IG9mIGRpcmVjdGl2ZXMgYW5kIHBpcGVzIHRoYXQgd2lsbFxuICogYmUgcmVjb2duaXplZCBpbiB0aGUgdGVtcGxhdGVzIG9mIGNvbXBvbmVudHMgZGVjbGFyZWQgYnkgdGhlIG1vZHVsZS4gVGhlIGBleHBvcnRlZGAgc2NvcGUgaXMgdGhlXG4gKiBzZXQgb2YgZGlyZWN0aXZlcyBhbmQgcGlwZXMgZXhwb3J0ZWQgYnkgYSBtb2R1bGUgKHRoYXQgaXMsIG1vZHVsZSBCJ3MgZXhwb3J0ZWQgc2NvcGUgZ2V0cyBhZGRlZFxuICogdG8gbW9kdWxlIEEncyBjb21waWxhdGlvbiBzY29wZSB3aGVuIG1vZHVsZSBBIGltcG9ydHMgQikuXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdNb2R1bGVUcmFuc2l0aXZlU2NvcGVzIHtcbiAgY29tcGlsYXRpb246IHtkaXJlY3RpdmVzOiBTZXQ8YW55PjsgcGlwZXM6IFNldDxhbnk+O307XG4gIGV4cG9ydGVkOiB7ZGlyZWN0aXZlczogU2V0PGFueT47IHBpcGVzOiBTZXQ8YW55Pjt9O1xufVxuXG4vKipcbiAqIEEgdmVyc2lvbiBvZiB7QGxpbmsgTmdNb2R1bGVEZWZ9IHRoYXQgcmVwcmVzZW50cyB0aGUgcnVudGltZSB0eXBlIHNoYXBlIG9ubHksIGFuZCBleGNsdWRlc1xuICogbWV0YWRhdGEgcGFyYW1ldGVycy5cbiAqL1xuZXhwb3J0IHR5cGUgTmdNb2R1bGVEZWZJbnRlcm5hbDxUPiA9IE5nTW9kdWxlRGVmPFQsIGFueSwgYW55LCBhbnk+O1xuXG4vKipcbiAqIFJ1bnRpbWUgbGluayBpbmZvcm1hdGlvbiBmb3IgTmdNb2R1bGVzLlxuICpcbiAqIFRoaXMgaXMgdGhlIGludGVybmFsIGRhdGEgc3RydWN0dXJlIHVzZWQgYnkgdGhlIHJ1bnRpbWUgdG8gYXNzZW1ibGUgY29tcG9uZW50cywgZGlyZWN0aXZlcyxcbiAqIHBpcGVzLCBhbmQgaW5qZWN0b3JzLlxuICpcbiAqIE5PVEU6IEFsd2F5cyB1c2UgYGRlZmluZU5nTW9kdWxlYCBmdW5jdGlvbiB0byBjcmVhdGUgdGhpcyBvYmplY3QsXG4gKiBuZXZlciBjcmVhdGUgdGhlIG9iamVjdCBkaXJlY3RseSBzaW5jZSB0aGUgc2hhcGUgb2YgdGhpcyBvYmplY3RcbiAqIGNhbiBjaGFuZ2UgYmV0d2VlbiB2ZXJzaW9ucy5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZURlZjxULCBEZWNsYXJhdGlvbnMsIEltcG9ydHMsIEV4cG9ydHM+IHtcbiAgLyoqIFRva2VuIHJlcHJlc2VudGluZyB0aGUgbW9kdWxlLiBVc2VkIGJ5IERJLiAqL1xuICB0eXBlOiBUO1xuXG4gIC8qKiBMaXN0IG9mIGNvbXBvbmVudHMgdG8gYm9vdHN0cmFwLiAqL1xuICBib290c3RyYXA6IFR5cGU8YW55PltdO1xuXG4gIC8qKiBMaXN0IG9mIGNvbXBvbmVudHMsIGRpcmVjdGl2ZXMsIGFuZCBwaXBlcyBkZWNsYXJlZCBieSB0aGlzIG1vZHVsZS4gKi9cbiAgZGVjbGFyYXRpb25zOiBUeXBlPGFueT5bXTtcblxuICAvKiogTGlzdCBvZiBtb2R1bGVzIG9yIGBNb2R1bGVXaXRoUHJvdmlkZXJzYCBpbXBvcnRlZCBieSB0aGlzIG1vZHVsZS4gKi9cbiAgaW1wb3J0czogVHlwZTxhbnk+W107XG5cbiAgLyoqXG4gICAqIExpc3Qgb2YgbW9kdWxlcywgYE1vZHVsZVdpdGhQcm92aWRlcnNgLCBjb21wb25lbnRzLCBkaXJlY3RpdmVzLCBvciBwaXBlcyBleHBvcnRlZCBieSB0aGlzXG4gICAqIG1vZHVsZS5cbiAgICovXG4gIGV4cG9ydHM6IFR5cGU8YW55PltdO1xuXG4gIC8qKlxuICAgKiBDYWNoZWQgdmFsdWUgb2YgY29tcHV0ZWQgYHRyYW5zaXRpdmVDb21waWxlU2NvcGVzYCBmb3IgdGhpcyBtb2R1bGUuXG4gICAqXG4gICAqIFRoaXMgc2hvdWxkIG5ldmVyIGJlIHJlYWQgZGlyZWN0bHksIGJ1dCBhY2Nlc3NlZCB2aWEgYHRyYW5zaXRpdmVTY29wZXNGb3JgLlxuICAgKi9cbiAgdHJhbnNpdGl2ZUNvbXBpbGVTY29wZXM6IE5nTW9kdWxlVHJhbnNpdGl2ZVNjb3Blc3xudWxsO1xufVxuXG4vKipcbiAqIEEgd3JhcHBlciBhcm91bmQgYW4gTmdNb2R1bGUgdGhhdCBhc3NvY2lhdGVzIGl0IHdpdGggdGhlIHByb3ZpZGVycy5cbiAqXG4gKiBAcGFyYW0gVCB0aGUgbW9kdWxlIHR5cGUuIEluIEl2eSBhcHBsaWNhdGlvbnMsIHRoaXMgbXVzdCBiZSBleHBsaWNpdGx5XG4gKiBwcm92aWRlZC5cbiAqL1xuZXhwb3J0IGludGVyZmFjZSBNb2R1bGVXaXRoUHJvdmlkZXJzPFQgPSBhbnk+IHtcbiAgbmdNb2R1bGU6IFR5cGU8VD47XG4gIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG59XG5cbi8qKlxuICogQSBzY2hlbWEgZGVmaW5pdGlvbiBhc3NvY2lhdGVkIHdpdGggYW4gTmdNb2R1bGUuXG4gKiBcbiAqIEBzZWUgYEBOZ01vZHVsZWAsIGBDVVNUT01fRUxFTUVOVFNfU0NIRU1BYCwgYE5PX0VSUk9SU19TQ0hFTUFgXG4gKiBcbiAqIEBwYXJhbSBuYW1lIFRoZSBuYW1lIG9mIGEgZGVmaW5lZCBzY2hlbWEuXG4gKlxuICogQGV4cGVyaW1lbnRhbFxuICovXG5leHBvcnQgaW50ZXJmYWNlIFNjaGVtYU1ldGFkYXRhIHsgbmFtZTogc3RyaW5nOyB9XG5cbi8qKlxuICogRGVmaW5lcyBhIHNjaGVtYSB0aGF0IGFsbG93cyBhbiBOZ01vZHVsZSB0byBjb250YWluIHRoZSBmb2xsb3dpbmc6XG4gKiAtIE5vbi1Bbmd1bGFyIGVsZW1lbnRzIG5hbWVkIHdpdGggZGFzaCBjYXNlIChgLWApLlxuICogLSBFbGVtZW50IHByb3BlcnRpZXMgbmFtZWQgd2l0aCBkYXNoIGNhc2UgKGAtYCkuXG4gKiBEYXNoIGNhc2UgaXMgdGhlIG5hbWluZyBjb252ZW50aW9uIGZvciBjdXN0b20gZWxlbWVudHMuXG4gKlxuICpcbiAqL1xuZXhwb3J0IGNvbnN0IENVU1RPTV9FTEVNRU5UU19TQ0hFTUE6IFNjaGVtYU1ldGFkYXRhID0ge1xuICBuYW1lOiAnY3VzdG9tLWVsZW1lbnRzJ1xufTtcblxuLyoqXG4gKiBEZWZpbmVzIGEgc2NoZW1hIHRoYXQgYWxsb3dzIGFueSBwcm9wZXJ0eSBvbiBhbnkgZWxlbWVudC5cbiAqXG4gKiBAZXhwZXJpbWVudGFsXG4gKi9cbmV4cG9ydCBjb25zdCBOT19FUlJPUlNfU0NIRU1BOiBTY2hlbWFNZXRhZGF0YSA9IHtcbiAgbmFtZTogJ25vLWVycm9ycy1zY2hlbWEnXG59O1xuXG5cbi8qKlxuICogVHlwZSBvZiB0aGUgTmdNb2R1bGUgZGVjb3JhdG9yIC8gY29uc3RydWN0b3IgZnVuY3Rpb24uXG4gKlxuICpcbiAqL1xuZXhwb3J0IGludGVyZmFjZSBOZ01vZHVsZURlY29yYXRvciB7XG4gIC8qKlxuICAgKiBNYXJrcyBhIGNsYXNzIGFzIGFuIE5nTW9kdWxlIGFuZCBzdXBwbGllcyBjb25maWd1cmF0aW9uIG1ldGFkYXRhLlxuICAgKi9cbiAgKG9iaj86IE5nTW9kdWxlKTogVHlwZURlY29yYXRvcjtcbiAgbmV3IChvYmo/OiBOZ01vZHVsZSk6IE5nTW9kdWxlO1xufVxuXG4vKipcbiAqIFR5cGUgb2YgdGhlIE5nTW9kdWxlIG1ldGFkYXRhLlxuICpcbiAqXG4gKi9cbmV4cG9ydCBpbnRlcmZhY2UgTmdNb2R1bGUge1xuICAvKipcbiAgICogVGhlIHNldCBvZiBpbmplY3RhYmxlIG9iamVjdHMgdGhhdCBhcmUgYXZhaWxhYmxlIGluIHRoZSBpbmplY3RvclxuICAgKiBvZiB0aGlzIG1vZHVsZS5cbiAgICogXG4gICAqIEBzZWUgW0RlcGVuZGVuY3kgSW5qZWN0aW9uIGd1aWRlXShndWlkZS9kZXBlbmRlbmN5LWluamVjdGlvbilcbiAgICogQHNlZSBbTmdNb2R1bGUgZ3VpZGVdKGd1aWRlL3Byb3ZpZGVycylcbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogRGVwZW5kZW5jaWVzIHdob3NlIHByb3ZpZGVycyBhcmUgbGlzdGVkIGhlcmUgYmVjb21lIGF2YWlsYWJsZSBmb3IgaW5qZWN0aW9uXG4gICAqIGludG8gYW55IGNvbXBvbmVudCwgZGlyZWN0aXZlLCBwaXBlIG9yIHNlcnZpY2UgdGhhdCBpcyBhIGNoaWxkIG9mIHRoaXMgaW5qZWN0b3IuXG4gICAqIFRoZSBOZ01vZHVsZSB1c2VkIGZvciBib290c3RyYXBwaW5nIHVzZXMgdGhlIHJvb3QgaW5qZWN0b3IsIGFuZCBjYW4gcHJvdmlkZSBkZXBlbmRlbmNpZXNcbiAgICogdG8gYW55IHBhcnQgb2YgdGhlIGFwcC5cbiAgICogXG4gICAqIEEgbGF6eS1sb2FkZWQgbW9kdWxlIGhhcyBpdHMgb3duIGluamVjdG9yLCB0eXBpY2FsbHkgYSBjaGlsZCBvZiB0aGUgYXBwIHJvb3QgaW5qZWN0b3IuXG4gICAqIExhenktbG9hZGVkIHNlcnZpY2VzIGFyZSBzY29wZWQgdG8gdGhlIGxhenktbG9hZGVkIG1vZHVsZSdzIGluamVjdG9yLlxuICAgKiBJZiBhIGxhenktbG9hZGVkIG1vZHVsZSBhbHNvIHByb3ZpZGVzIHRoZSBgVXNlclNlcnZpY2VgLCBhbnkgY29tcG9uZW50IGNyZWF0ZWRcbiAgICogd2l0aGluIHRoYXQgbW9kdWxlJ3MgY29udGV4dCAoc3VjaCBhcyBieSByb3V0ZXIgbmF2aWdhdGlvbikgZ2V0cyB0aGUgbG9jYWwgaW5zdGFuY2VcbiAgICogb2YgdGhlIHNlcnZpY2UsIG5vdCB0aGUgaW5zdGFuY2UgaW4gdGhlIHJvb3QgaW5qZWN0b3IuIFxuICAgKiBDb21wb25lbnRzIGluIGV4dGVybmFsIG1vZHVsZXMgY29udGludWUgdG8gcmVjZWl2ZSB0aGUgaW5zdGFuY2UgcHJvdmlkZWQgYnkgdGhlaXIgaW5qZWN0b3JzLlxuICAgKiBcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGRlZmluZXMgYSBjbGFzcyB0aGF0IGlzIGluamVjdGVkIGluXG4gICAqIHRoZSBIZWxsb1dvcmxkIE5nTW9kdWxlOlxuICAgKlxuICAgKiBgYGBcbiAgICogY2xhc3MgR3JlZXRlciB7XG4gICAqICAgIGdyZWV0KG5hbWU6c3RyaW5nKSB7XG4gICAqICAgICAgcmV0dXJuICdIZWxsbyAnICsgbmFtZSArICchJztcbiAgICogICAgfVxuICAgKiB9XG4gICAqXG4gICAqIEBOZ01vZHVsZSh7XG4gICAqICAgcHJvdmlkZXJzOiBbXG4gICAqICAgICBHcmVldGVyXG4gICAqICAgXVxuICAgKiB9KVxuICAgKiBjbGFzcyBIZWxsb1dvcmxkIHtcbiAgICogICBncmVldGVyOkdyZWV0ZXI7XG4gICAqXG4gICAqICAgY29uc3RydWN0b3IoZ3JlZXRlcjpHcmVldGVyKSB7XG4gICAqICAgICB0aGlzLmdyZWV0ZXIgPSBncmVldGVyO1xuICAgKiAgIH1cbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIHByb3ZpZGVycz86IFByb3ZpZGVyW107XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgY29tcG9uZW50cywgZGlyZWN0aXZlcywgYW5kIHBpcGVzIChbZGVjbGFyYWJsZXNdKGd1aWRlL2dsb3NzYXJ5I2RlY2xhcmFibGUpKVxuICAgKiB0aGF0IGJlbG9uZyB0byB0aGlzIG1vZHVsZS5cbiAgICpcbiAgICogQHVzYWdlTm90ZXNcbiAgICpcbiAgICogVGhlIHNldCBvZiBzZWxlY3RvcnMgdGhhdCBhcmUgYXZhaWxhYmxlIHRvIGEgdGVtcGxhdGUgaW5jbHVkZSB0aG9zZSBkZWNsYXJlZCBoZXJlLCBhbmRcbiAgICogdGhvc2UgdGhhdCBhcmUgZXhwb3J0ZWQgZnJvbSBpbXBvcnRlZCBOZ01vZHVsZXMuXG4gICAqXG4gICAqIERlY2xhcmFibGVzIG11c3QgYmVsb25nIHRvIGV4YWN0bHkgb25lIG1vZHVsZS5cbiAgICogVGhlIGNvbXBpbGVyIGVtaXRzIGFuIGVycm9yIGlmIHlvdSB0cnkgdG8gZGVjbGFyZSB0aGUgc2FtZSBjbGFzcyBpbiBtb3JlIHRoYW4gb25lIG1vZHVsZS5cbiAgICogQmUgY2FyZWZ1bCBub3QgdG8gZGVjbGFyZSBhIGNsYXNzIHRoYXQgaXMgaW1wb3J0ZWQgZnJvbSBhbm90aGVyIG1vZHVsZS5cbiAgICpcbiAgICogIyMjIEV4YW1wbGVcbiAgICpcbiAgICogVGhlIGZvbGxvd2luZyBleGFtcGxlIGFsbG93cyB0aGUgQ29tbW9uTW9kdWxlIHRvIHVzZSB0aGUgYE5nRm9yYFxuICAgKiBkaXJlY3RpdmUuXG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBkZWNsYXJhdGlvbnM6IFtOZ0Zvcl1cbiAgICogfSlcbiAgICogY2xhc3MgQ29tbW9uTW9kdWxlIHtcbiAgICogfVxuICAgKiBgYGBcbiAgICovXG4gIGRlY2xhcmF0aW9ucz86IEFycmF5PFR5cGU8YW55PnxhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgTmdNb2R1bGVzIHdob3NlIGV4cG9ydGVkIFtkZWNsYXJhYmxlc10oZ3VpZGUvZ2xvc3NhcnkjZGVjbGFyYWJsZSlcbiAgICogYXJlIGF2YWlsYWJsZSB0byB0ZW1wbGF0ZXMgaW4gdGhpcyBtb2R1bGUuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIEEgdGVtcGxhdGUgY2FuIHVzZSBleHBvcnRlZCBkZWNsYXJhYmxlcyBmcm9tIGFueVxuICAgKiBpbXBvcnRlZCBtb2R1bGUsIGluY2x1ZGluZyB0aG9zZSBmcm9tIG1vZHVsZXMgdGhhdCBhcmUgaW1wb3J0ZWQgaW5kaXJlY3RseVxuICAgKiBhbmQgcmUtZXhwb3J0ZWQuXG4gICAqIEZvciBleGFtcGxlLCBgTW9kdWxlQWAgaW1wb3J0cyBgTW9kdWxlQmAsIGFuZCBhbHNvIGV4cG9ydHNcbiAgICogaXQsIHdoaWNoIG1ha2VzIHRoZSBkZWNsYXJhYmxlcyBmcm9tIGBNb2R1bGVCYCBhdmFpbGFibGVcbiAgICogd2hlcmV2ZXIgYE1vZHVsZUFgIGlzIGltcG9ydGVkLlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgYWxsb3dzIE1haW5Nb2R1bGUgdG8gdXNlIGFudGhpbmcgZXhwb3J0ZWQgYnlcbiAgICogYENvbW1vbk1vZHVsZWA6XG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBpbXBvcnRzOiBbQ29tbW9uTW9kdWxlXVxuICAgKiB9KVxuICAgKiBjbGFzcyBNYWluTW9kdWxlIHtcbiAgICogfVxuICAgKiBgYGBcbiAgICpcbiAgICovXG4gIGltcG9ydHM/OiBBcnJheTxUeXBlPGFueT58TW9kdWxlV2l0aFByb3ZpZGVyc3xhbnlbXT47XG5cbiAgLyoqXG4gICAqIFRoZSBzZXQgb2YgY29tcG9uZW50cywgZGlyZWN0aXZlcywgYW5kIHBpcGVzIGRlY2xhcmVkIGluIHRoaXNcbiAgICogTmdNb2R1bGUgdGhhdCBjYW4gYmUgdXNlZCBpbiB0aGUgdGVtcGxhdGUgb2YgYW55IGNvbXBvbmVudCB0aGF0IGlzIHBhcnQgb2YgYW5cbiAgICogTmdNb2R1bGUgdGhhdCBpbXBvcnRzIHRoaXMgTmdNb2R1bGUuIEV4cG9ydGVkIGRlY2xhcmF0aW9ucyBhcmUgdGhlIG1vZHVsZSdzIHB1YmxpYyBBUEkuXG4gICAqXG4gICAqIEEgZGVjbGFyYWJsZSBiZWxvbmdzIHRvIG9uZSBhbmQgb25seSBvbmUgTmdNb2R1bGUuXG4gICAqIEEgbW9kdWxlIGNhbiBsaXN0IGFub3RoZXIgbW9kdWxlIGFtb25nIGl0cyBleHBvcnRzLCBpbiB3aGljaCBjYXNlIGFsbCBvZiB0aGF0IG1vZHVsZSdzXG4gICAqIHB1YmxpYyBkZWNsYXJhdGlvbiBhcmUgZXhwb3J0ZWQuXG4gICAqXG4gICAqIEB1c2FnZU5vdGVzXG4gICAqXG4gICAqIERlY2xhcmF0aW9ucyBhcmUgcHJpdmF0ZSBieSBkZWZhdWx0LlxuICAgKiBJZiB0aGlzIE1vZHVsZUEgZG9lcyBub3QgZXhwb3J0IFVzZXJDb21wb25lbnQsIHRoZW4gb25seSB0aGUgY29tcG9uZW50cyB3aXRoaW4gdGhpc1xuICAgKiBNb2R1bGVBIGNhbiB1c2UgVXNlckNvbXBvbmVudC5cbiAgICpcbiAgICogTW9kdWxlQSBjYW4gaW1wb3J0IE1vZHVsZUIgYW5kIGFsc28gZXhwb3J0IGl0LCBtYWtpbmcgZXhwb3J0cyBmcm9tIE1vZHVsZUJcbiAgICogYXZhaWxhYmxlIHRvIGFuIE5nTW9kdWxlIHRoYXQgaW1wb3J0cyBNb2R1bGVBLlxuICAgKlxuICAgKiAjIyMgRXhhbXBsZVxuICAgKlxuICAgKiBUaGUgZm9sbG93aW5nIGV4YW1wbGUgZXhwb3J0cyB0aGUgYE5nRm9yYCBkaXJlY3RpdmUgZnJvbSBDb21tb25Nb2R1bGUuXG4gICAqXG4gICAqIGBgYGphdmFzY3JpcHRcbiAgICogQE5nTW9kdWxlKHtcbiAgICogICBleHBvcnRzOiBbTmdGb3JdXG4gICAqIH0pXG4gICAqIGNsYXNzIENvbW1vbk1vZHVsZSB7XG4gICAqIH1cbiAgICogYGBgXG4gICAqL1xuICBleHBvcnRzPzogQXJyYXk8VHlwZTxhbnk+fGFueVtdPjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBjb21wb25lbnRzIHRvIGNvbXBpbGUgd2hlbiB0aGlzIE5nTW9kdWxlIGlzIGRlZmluZWQsXG4gICAqIHNvIHRoYXQgdGhleSBjYW4gYmUgZHluYW1pY2FsbHkgbG9hZGVkIGludG8gdGhlIHZpZXcuXG4gICAqXG4gICAqIEZvciBlYWNoIGNvbXBvbmVudCBsaXN0ZWQgaGVyZSwgQW5ndWxhciBjcmVhdGVzIGEgYENvbXBvbmVudEZhY3RvcnlgXG4gICAqIGFuZCBzdG9yZXMgaXQgaW4gdGhlIGBDb21wb25lbnRGYWN0b3J5UmVzb2x2ZXJgLlxuICAgKlxuICAgKiBBbmd1bGFyIGF1dG9tYXRpY2FsbHkgYWRkcyBjb21wb25lbnRzIGluIHRoZSBtb2R1bGUncyBib290c3RyYXBcbiAgICogYW5kIHJvdXRlIGRlZmluaXRpb25zIGludG8gdGhlIGBlbnRyeUNvbXBvbmVudHNgIGxpc3QuIFVzZSB0aGlzXG4gICAqIG9wdGlvbiB0byBhZGQgY29tcG9uZW50cyB0aGF0IGFyZSBib290c3RyYXBwZWRcbiAgICogdXNpbmcgb25lIG9mIHRoZSBpbXBlcmF0aXZlIHRlY2huaXF1ZXMsIHN1Y2ggYXMgYFZpZXdDb250YWluZXJSZWYuY3JlYXRlQ29tcG9uZW50KClgLlxuICAgKlxuICAgKiBAc2VlIFtFbnRyeSBDb21wb25lbnRzXShndWlkZS9lbnRyeS1jb21wb25lbnRzKVxuICAgKi9cbiAgZW50cnlDb21wb25lbnRzPzogQXJyYXk8VHlwZTxhbnk+fGFueVtdPjtcblxuICAvKipcbiAgICogVGhlIHNldCBvZiBjb21wb25lbnRzIHRoYXQgYXJlIGJvb3RzdHJhcHBlZCB3aGVuXG4gICAqIHRoaXMgbW9kdWxlIGlzIGJvb3RzdHJhcHBlZC4gVGhlIGNvbXBvbmVudHMgbGlzdGVkIGhlcmVcbiAgICogYXJlIGF1dG9tYXRpY2FsbHkgYWRkZWQgdG8gYGVudHJ5Q29tcG9uZW50c2AuXG4gICAqL1xuICBib290c3RyYXA/OiBBcnJheTxUeXBlPGFueT58YW55W10+O1xuXG4gIC8qKlxuICAgKiBUaGUgc2V0IG9mIHNjaGVtYXMgdGhhdCBkZWNsYXJlIGVsZW1lbnRzIHRvIGJlIGFsbG93ZWQgaW4gdGhlIE5nTW9kdWxlLlxuICAgKiBFbGVtZW50cyBhbmQgcHJvcGVydGllcyB0aGF0IGFyZSBuZWl0aGVyIEFuZ3VsYXIgY29tcG9uZW50cyBub3IgZGlyZWN0aXZlc1xuICAgKiBtdXN0IGJlIGRlY2xhcmVkIGluIGEgc2NoZW1hLlxuICAgKlxuICAgKiBBbGxvd2VkIHZhbHVlIGFyZSBgTk9fRVJST1JTX1NDSEVNQWAgYW5kIGBDVVNUT01fRUxFTUVOVFNfU0NIRU1BYC5cbiAgICpcbiAgICogQHNlY3VyaXR5IFdoZW4gdXNpbmcgb25lIG9mIGBOT19FUlJPUlNfU0NIRU1BYCBvciBgQ1VTVE9NX0VMRU1FTlRTX1NDSEVNQWBcbiAgICogeW91IG11c3QgZW5zdXJlIHRoYXQgYWxsb3dlZCBlbGVtZW50cyBhbmQgcHJvcGVydGllcyBzZWN1cmVseSBlc2NhcGUgaW5wdXRzLlxuICAgKi9cbiAgc2NoZW1hcz86IEFycmF5PFNjaGVtYU1ldGFkYXRhfGFueVtdPjtcblxuICAvKipcbiAgICogQSBuYW1lIG9yIHBhdGggdGhhdCB1bmlxdWVseSBpZGVudGlmaWVzIHRoaXMgTmdNb2R1bGUgaW4gYGdldE1vZHVsZUZhY3RvcnlgLlxuICAgKiBJZiBsZWZ0IGB1bmRlZmluZWRgLCB0aGUgTmdNb2R1bGUgaXMgbm90IHJlZ2lzdGVyZWQgd2l0aFxuICAgKiBgZ2V0TW9kdWxlRmFjdG9yeWAuXG4gICAqL1xuICBpZD86IHN0cmluZztcblxuICAvKipcbiAgICogSWYgdHJ1ZSwgdGhpcyBtb2R1bGUgd2lsbCBiZSBza2lwcGVkIGJ5IHRoZSBBT1QgY29tcGlsZXIgYW5kIHNvIHdpbGwgYWx3YXlzIGJlIGNvbXBpbGVkXG4gICAqIHVzaW5nIEpJVC5cbiAgICpcbiAgICogVGhpcyBleGlzdHMgdG8gc3VwcG9ydCBmdXR1cmUgSXZ5IHdvcmsgYW5kIGhhcyBubyBlZmZlY3QgY3VycmVudGx5LlxuICAgKi9cbiAgaml0PzogdHJ1ZTtcbn1cblxuZnVuY3Rpb24gcHJlUjNOZ01vZHVsZUNvbXBpbGUobW9kdWxlVHlwZTogSW5qZWN0b3JUeXBlPGFueT4sIG1ldGFkYXRhOiBOZ01vZHVsZSk6IHZvaWQge1xuICBsZXQgaW1wb3J0cyA9IChtZXRhZGF0YSAmJiBtZXRhZGF0YS5pbXBvcnRzKSB8fCBbXTtcbiAgaWYgKG1ldGFkYXRhICYmIG1ldGFkYXRhLmV4cG9ydHMpIHtcbiAgICBpbXBvcnRzID0gWy4uLmltcG9ydHMsIG1ldGFkYXRhLmV4cG9ydHNdO1xuICB9XG5cbiAgbW9kdWxlVHlwZS5uZ0luamVjdG9yRGVmID0gZGVmaW5lSW5qZWN0b3Ioe1xuICAgIGZhY3Rvcnk6IGNvbnZlcnRJbmplY3RhYmxlUHJvdmlkZXJUb0ZhY3RvcnkobW9kdWxlVHlwZSwge3VzZUNsYXNzOiBtb2R1bGVUeXBlfSksXG4gICAgcHJvdmlkZXJzOiBtZXRhZGF0YSAmJiBtZXRhZGF0YS5wcm92aWRlcnMsXG4gICAgaW1wb3J0czogaW1wb3J0cyxcbiAgfSk7XG59XG5cbi8qKlxuICogQEFubm90YXRpb25cbiAqL1xuZXhwb3J0IGNvbnN0IE5nTW9kdWxlOiBOZ01vZHVsZURlY29yYXRvciA9IG1ha2VEZWNvcmF0b3IoXG4gICAgJ05nTW9kdWxlJywgKG5nTW9kdWxlOiBOZ01vZHVsZSkgPT4gbmdNb2R1bGUsIHVuZGVmaW5lZCwgdW5kZWZpbmVkLFxuICAgIC8qKlxuICAgICAqIERlY29yYXRvciB0aGF0IG1hcmtzIHRoZSBmb2xsb3dpbmcgY2xhc3MgYXMgYW4gTmdNb2R1bGUsIGFuZCBzdXBwbGllc1xuICAgICAqIGNvbmZpZ3VyYXRpb24gbWV0YWRhdGEgZm9yIGl0LlxuICAgICAqXG4gICAgICogKiBUaGUgYGRlY2xhcmF0aW9uc2AgYW5kIGBlbnRyeUNvbXBvbmVudHNgIG9wdGlvbnMgY29uZmlndXJlIHRoZSBjb21waWxlclxuICAgICAqIHdpdGggaW5mb3JtYXRpb24gYWJvdXQgd2hhdCBiZWxvbmdzIHRvIHRoZSBOZ01vZHVsZS5cbiAgICAgKiAqIFRoZSBgcHJvdmlkZXJzYCBvcHRpb25zIGNvbmZpZ3VyZXMgdGhlIE5nTW9kdWxlJ3MgaW5qZWN0b3IgdG8gcHJvdmlkZVxuICAgICAqIGRlcGVuZGVuY2llcyB0aGUgTmdNb2R1bGUgbWVtYmVycy5cbiAgICAgKiAqIFRoZSBgaW1wb3J0c2AgYW5kIGBleHBvcnRzYCBvcHRpb25zIGJyaW5nIGluIG1lbWJlcnMgZnJvbSBvdGhlciBtb2R1bGVzLCBhbmQgbWFrZVxuICAgICAqIHRoaXMgbW9kdWxlJ3MgbWVtYmVycyBhdmFpbGFibGUgdG8gb3RoZXJzLlxuICAgICAqL1xuICAgICh0eXBlOiBUeXBlPGFueT4sIG1ldGE6IE5nTW9kdWxlKSA9PiAoUjNfQ09NUElMRV9OR01PRFVMRSB8fCBwcmVSM05nTW9kdWxlQ29tcGlsZSkodHlwZSwgbWV0YSkpO1xuIl19