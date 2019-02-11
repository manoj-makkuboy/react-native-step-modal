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

## demo
<img src="demo.gif" width="200" height="400" />

## Authors

* **Manoj Mohan** - *Initial work* - [manoj-makkuboy](https://github.com/manoj-makkuboy)
* **Mukul Mahajan Singraur** - *Initial work* - [rammmukul](https://github.com/rammmukul)
* **Saurabh Ramesh Kacholiya** - *Initial work* - [saurabhkacholiya](https://github.com/saurabhkacholiya)

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details
