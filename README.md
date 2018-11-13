# react-native-step-modal
React Native modal with step indicator

## installation
`npm install react-native-step-modal`

## usage

```
import StepModal from "react-native-step-modal";

class Login extends Component {

  render() {
    let Component1 =  <Text> component 1</Text>;
    let Componet2 =  <Text> component 2</Text>;
    
    return (
      <View>
         <StepModal stepComponents={[Component1, Component2]} />
      </View>
    );
  }
}

```

