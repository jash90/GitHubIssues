import {View, FlatList, Text, TouchableOpacity, Linking} from 'react-native';
import React from 'react';
import moment from 'moment';
import {IssueComponent, Title, RowBetween, TagText, TagView} from '../components/StyledComponent';
interface Props {
  item: any;
}

export default class Issue extends React.Component<Props, {}> {
  constructor(props: Props) {
    super(props);
  }

  render() {
    const {title, url, closed, createdAt} = this.props.item;
    return (
      <IssueComponent>
        <Title>{title}</Title>
        <FlatList
            horizontal
            style={{paddingVertical:5}}
            data={this.props.item.labels.edges}
            renderItem={({item}: any) => <TagView color={this.getRandomColor()}><TagText>{item.node.name}</TagText></TagView>}
        />
        <RowBetween>
          <TouchableOpacity
            onPress={() => Linking.openURL(url)}>
            <Text>{'Link'}</Text>
          </TouchableOpacity>
          <Text>{moment(createdAt).format('DD.MM.YYYY')}</Text>
         <TagView color={closed ? 'red':'green'}>
            <TagText>{closed ? 'Closed':'Open'}</TagText>
         </TagView>
        </RowBetween>
      </IssueComponent>
    );
  }

  getRandomColor() {
    var letters = '0123456789ABCDEF';
    var color = '#';
    for (var i = 0; i < 6; i++) {
      color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
  }


}
