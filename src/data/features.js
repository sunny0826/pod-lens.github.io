import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';

const features = [
  {
    title: <>Kubectl Plugin</>,
    imgUrl: 'img/krew-logo.svg',
    description: (
      <>
        <p>
          <code>kubectl-pod-lens</code> <Translate>is a</Translate>{' '}
          <a href="https://kubernetes.io/docs/tasks/extend-kubectl/kubectl-plugins/">kubectl plugin</a> 
          {' '}<Translate>that show pod-related resource information.</Translate>
        </p>
      </>
    ),
  },
]

export default features
