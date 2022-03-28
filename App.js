import React from 'react'
import { StyleSheet, Text, View } from 'react-native';

import { PrivateKey } from '@textile/crypto';
import Client from '@textile/threads-client';

const PrivateKeyIdentity = 'bbaareqhvbkss57bqe7u2jz3hmoitqntbbdflalqbnmtpm7t7yq7ee5rhyvre23iivcvttvguhghjt2ht4i2dan7zak7v7h55yblnd5cbwe3m2'

const keyInfo = {
  key: 'bxflk4r4dnyokmbebxulkfjxe6u', // Add your key here
  secret: 'bxw6twkudeonhfzgizxlqoee7bxqe2wkdqp44kpq' // Add your secret here
};

const getTokenFromAPI = (client, identity, count = 0) => client.getToken(identity).then().catch(err => {
  if(count < 3) {
    return getTokenFromAPI(client, identity, count + 1);
  }
});

const main = async () =>  {
  const client = await Client.withKeyInfo(keyInfo)

  const identity = PrivateKey.fromString(PrivateKeyIdentity);

  // await getTokenFromAPI(client, identity)
  await client.getToken(identity);
};

main();

class App extends React.Component {  
  render() {
    return (
      <View style={styles.container}>
        <Text>Hello World</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

export default App;