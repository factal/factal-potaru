import React from 'react'
import { TransitionGroup, Transition as ReactTransition } from 'react-transition-group'

type Props = {
  location: string
}

const TIMEOUT: number = 100

const getTransitionStyles = {
  entering: {
    //position: 'fixed',
    //transition: `opacity ${TIMEOUT}ms ease-in-out`,
    opacity: 0,
  },
  entered: {
    transition: `opacity ${TIMEOUT}ms ease-in-out`,
    opacity: 1,
    animation: "blink .2s linear 2",
  },
  exiting: {
    opacity: 0,
  },
}

const Transition: React.FC<Props> = (props) => {

  return (
    <TransitionGroup>
      <ReactTransition key={props.location} timeout={{ enter: TIMEOUT }}>
        { (status) => {
          return (
            <div id={props.location}
              style={{
                opacity: 1,
                margin: 0,
                height: '100%',
                position: 'absolute',
                //@ts-ignore
                ...getTransitionStyles[status],
              }}
            >
              {props.children}
            </div>
          )
        }}
      </ReactTransition>
    </TransitionGroup>
  )
}

export default Transition