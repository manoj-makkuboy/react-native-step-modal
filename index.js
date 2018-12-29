import {
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  Platform
} from "react-native";
import React, { Component } from "react";
import Modal from "react-native-modal";
import Carousel from "react-native-looped-carousel";

import PageControl from "react-native-page-control";

export default class StepModal extends Component {
  constructor(props) {
    super(props);
    this.state = { currentPage: 0, isVisible: true };
  }

  _renderNextButton() {
    const nextIndex = this.state.currentPage + 1;
    return (
      <View
        style={{
          marginRight: 10
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.setState({ currentPage: nextIndex });
            this.carousel.animateToPage(nextIndex);
          }}
        >
          <Text style={{ color: "#60bca5", fontWeight: "bold", fontSize: 14 }}>
            {" "}
            Next{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderFinishButton() {
    return (
      <View
        style={{
          marginRight: 10
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.setState({ isVisible: false });
          }}
        >
          <Text style={{ color: "#60bca5", fontWeight: "bold", fontSize: 14 }}>
            {" "}
            Finish{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  _renderSkipButton() {
    return (
      <View
        style={{
          marginLeft: 10
        }}
      >
        <TouchableOpacity
          onPress={() => {
            this.setState({ isVisible: false });
          }}
        >
          <Text style={{ color: "grey", fontWeight: "bold", fontSize: 14 }}>
            {" "}
            Skip{" "}
          </Text>
        </TouchableOpacity>
      </View>
    );
  }

  isLastStep() {
    return this.props.stepComponents.length - 1 === this.state.currentPage;
  }

  changeIndex = (index) => {
    this.setState({ currentPage: index });
  }

  render() {
    let stepComponents = this.props.stepComponents;

    return (
      <View>
        <Modal isVisible={this.state.isVisible}>
          <View
            style={
              Platform.OS === "android"
                ? customStyles.modalAndroid
                : customStyles.modalIOS
            }
          >
            <View
              style={{
                marginTop: 17,
                backgroundColor: "#ffffff",
                marginLeft: 10,
                marginRight: 10,
                height: "90%"
              }}
            >
              <Carousel
                style={{ width: "100%", height: "100%" }}
                onAnimateNextPage={this.changeIndex}
                isLooped={false}
                autoplay={false}
                ref={ref => (this.carousel = ref)}
              >
                {stepComponents}
              </Carousel>
              <PageControl
                style={{ position: "absolute", left: 0, right: 0, bottom: 10 }}
                numberOfPages={stepComponents.length}
                currentPage={this.state.currentPage}
                hidesForSinglePage
                pageIndicatorTintColor="#d3d3d3"
                currentPageIndicatorTintColor="#60BCA5"
                indicatorStyle={{ borderRadius: 7 }}
                currentIndicatorStyle={{ borderRadius: 5 }}
                indicatorSize={{ width: 13, height: 13 }}
                onPageIndicatorPress={this.onItemTap}
              />
            </View>
            <View
              style={{ flexDirection: "row", justifyContent: "space-between" }}
            >
              {
                this.isLastStep()
                ? <View />
                : this._renderSkipButton()
              }

              {
                this.isLastStep()
                ? this._renderFinishButton()
                : this._renderNextButton()
              }
            </View>
          </View>
        </Modal>
      </View>
    );
  }
}

const customStyles = StyleSheet.create({
  centerAlignDiv: {
    // flex:1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  bold: {
    fontWeight: "bold"
  },
  card: {
    width: 145,
    height: 138,
    marginTop: 30,
    marginBottom: 30,
    // paddingBottom:30,
    // paddingTop:30,
    backgroundColor: "#25355b",
    borderWidth: 3,
    borderStyle: "solid",
    borderColor: "#596582",
    borderRadius: 4
  },
  notificationText: {
    backgroundColor: "transparent",
    textAlign: "center",
    fontSize: 16,
    color: "#ffffff"
  },
  blueColorText: {
    color: "#435270"
  },
  circularImage: {
    height: 36,
    width: 36,
    borderRadius: 18
  },
  button: {
    marginTop: 15,
    marginBottom: 20,
    marginLeft: 10,
    marginRight: 10,
    backgroundColor: "#60bca5",
    paddingTop: 13,
    paddingBottom: 13,
    flex: 1,
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center"
  },
  backgroundImage: {
    backgroundColor: "transparent"
  },
  infoBox: {
    flexDirection: "row",
    paddingLeft: 10,
    paddingRight: 10,
    marginTop: 18
  },
  itemView: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 5,
    borderRadius: 4,
    marginLeft: 12,
    marginRight: 12,
    flexDirection: "row",
    borderColor: "#ececec",
    borderWidth: 1
  },
  itemViewSelected: {
    flex: 1,
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 15,
    paddingBottom: 15,
    marginTop: 5,
    borderRadius: 4,
    marginLeft: 12,
    marginRight: 12,
    flexDirection: "row",
    borderWidth: 1,
    borderColor: "#d0021b"
  },
  item: {
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    borderRadius: 4,
    marginLeft: 12,
    marginRight: 12,
    borderColor: "#ececec",
    borderWidth: 1
  },
  itemSelected: {
    backgroundColor: "#ffffff",
    paddingLeft: 15,
    paddingRight: 10,
    paddingTop: 10,
    paddingBottom: 10,
    marginTop: 5,
    borderRadius: 4,
    marginLeft: 12,
    marginRight: 12,
    borderColor: "#d0021b",
    borderWidth: 1
  },
  itemTextIndent: {
    textAlign: "left",
    marginLeft: 10
  },
  itemText: {
    textAlign: "left",
    marginLeft: 15
  },
  modalIOS: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingBottom: 10,
    height: "60%"
  },
  modalAndroid: {
    backgroundColor: "#ffffff",
    borderRadius: 8,
    paddingBottom: 10,
    height: "80%"
  }
});
