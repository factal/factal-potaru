import React from 'react'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

type Props = {
  location: string
}

const TIMEOUT: number = 150

const getTransitionStyles = {
  entering: {
    position: `sticky`,
    opacity: 0,
    //transform: `translateX(50px)`,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    //transform: `translateX(0px)`,
    animation: "blink .2s linear 2",
  },
  exiting: {
    transition: `opacity ${TIMEOUT}ms ease-in-out, transform ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
    //transform: `translateX(-50px)`,
  },
}

const Transition: React.FC<Props> = (props) => {
  return (
    <TransitionGroup style={{ position: 'relative' }}>
      <ReactTransition
        key={props.location}
        timeout={{
          enter: TIMEOUT,
          exit: TIMEOUT,
        }}
      >
        { (status) => (
          <div
            style={{
              //@ts-ignore
              ...getTransitionStyles[status],
            }}
          >
            {props.children}
          </div>
        )}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition