import { Iterable } from 'immutable'

export const immutableStateTransformer = (state) => Iterable.isIterable(state) ? state.toJS() : state

export function action(type, argumentsToActionSelector = () => null) {
    var dispatch = this;
    return (...args) => dispatch({ type: type, ...argumentsToActionSelector(...args) });
}