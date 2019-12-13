import { View, FlatList, Text } from "react-native";
import { Component } from "react";


interface State {
 list:any;   
}

export default class Item extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
        list:[]
    };
  }

  componentDidMount() {
  }

  render() {
    return (
     <View>
         <FlatList data={[]}  renderItem={({ item }: any) => (
            <View>
                <Text>
                    {'test'}
                </Text>
            </View>
          )}/>
     </View>
    );
  }
 
}
