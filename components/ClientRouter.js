import { withRouter } from 'next/router';
import { ClientRouter as AppBridgeClientRouter } from '@shopify/app-bridge-react';

function ClientRouter(props) {
  // eslint-disable-next-line react/prop-types
  const { router } = props;
  return <AppBridgeClientRouter history={router} />;
}

export default withRouter(ClientRouter);
