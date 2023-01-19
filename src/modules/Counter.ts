import { type } from "os";

// 액션 타입 선언
const INCREASE = 'counter/INCREASE' as const;
const DECREASE = 'counter/DECREASE' as const;
const INCREASE_BY = 'counter/INCREASE_BY' as const

// 액션 생성 함수 선언
export const increase = () => ({
  type: INCREASE
})

export const decrease = () => ({
  type: DECREASE
})

export const increaseBy = (diff: number) => ({
  type: INCREASE_BY,
  payload:diff
})

// 모든 액션 객체들에 대한 타입 준비
type CounterAction = 
| ReturnType<typeof increase>
| ReturnType<typeof decrease>
| ReturnType<typeof increaseBy>

// 리덕스 모듈에서 관리할 상태의 타입 선언
type CounterState = {
  count : number;
}

// 초기 상태 선언
const initialState: CounterState = {
  count : 0
}

// 리듀서 작성
function Counter(state : CounterState = initialState, action : CounterAction) : CounterState {
switch(action.type) {
  case INCREASE:
    return {count : state.count + 1}
  case DECREASE:
    return {count : state.count - 1}
  case INCREASE_BY:
    return {count : state.count +action.payload}
    default:
      return state;        
}
}

export default Counter