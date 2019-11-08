import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'

import React from 'react'

library.add(fab)

interface Props {
  name: any
}

const Icon: React.FC<Props> = (props: Props): JSX.Element => {
  switch (props.name) {
    case 'visa':
      return <FontAwesomeIcon icon={["fab", "cc-visa"]} />
    case 'master-card':
      return <FontAwesomeIcon icon={["fab", "cc-mastercard"]} />
      
    default:
      return <FontAwesomeIcon icon={props.name} />
  }
}

export default Icon