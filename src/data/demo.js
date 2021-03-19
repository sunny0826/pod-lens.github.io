import React from 'react'
import Translate, { translate } from '@docusaurus/Translate';

const demo = [
  {
    title: <><Translate>Display Pod-Related Resource</Translate></>,
    imgUrl: 'img/example.png',
    description: (
      <>
        <ul>
          <li>Workloads(Deployment,StatefulSet,DaemonSet)</li>
          <li>Namespace</li>
          <li>Node</li>
          <li>Service</li>
          <li>Ingress</li>
          <li>ConfigMap</li>
          <li>Secret</li>
          <li>PVC/PV</li>
          <li>HPA</li>
        </ul>
      </>
    ),
    reverse: true,
  },
]

export default demo
