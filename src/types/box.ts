export interface BoxState {
    box: any[],
    value: {
        field?: number;
    },
    hovers: any[]
}

export enum BoxActionTypes {
    FETCH_BOX = 'FETCH_BOX',
    SET_VALUE = 'SET_VALUE',
    SET_HOVER = 'SET_HOVER',
    RESTART_HOVERS = 'RESTART_HOVERS',
}

interface FetchBoxAction {
    type: BoxActionTypes.FETCH_BOX
    payload: []
}

interface SetValue {
    type: BoxActionTypes.SET_VALUE
    payload: {}
}
interface SetHover {
    type: BoxActionTypes.SET_HOVER
    payload: {}
}
interface RestartHovers {
    type: BoxActionTypes.RESTART_HOVERS
}

export type BoxAction =
    FetchBoxAction | SetValue | SetHover | RestartHovers
