export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT'

export function actionIncrement() {
    return ({ 
        type: INCREMENT
    })
}

export function actionDecrement() {
    return ({ 
        type: DECREMENT
    })
}
