import React from "react";
import { Text, View, TouchableOpacity } from "react-native";

import { Style } from "./Style";

export default function Calculator() {
  const [count, setCount] = React.useState(0);

  const handleNumber = (value) => {
    if (count == 0) {
      return setCount(count + value);
    } else {
      return setCount(count + "" + value);
    }
  };

  const clear = () => {
    setCount(0);
  };

  const result = () => {
    let total = eval(count);
    return setCount(total);
  };

  const del = () => {
    if (count.length > 0) {
      return setCount(count.slice(0, -1));
    } else {
      return setCount(0);
    }
  };

  return (
    <View style={Style.viewBottom}>
      <View style={Style.result}>
        <Text
          style={{
            color: "white",
            fontSize: "70px",
          }}
        >
          {count}
        </Text>
      </View>

      <View style={Style.row}>
        <TouchableOpacity style={Style.btnPink} onPress={() => clear()}>
          <Text style={Style.text}>C</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btnPink}>
          <Text style={Style.text}>+/-</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btnPink} onPress={() => handleNumber("%")}>
          <Text style={Style.text}>%</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btnSamping} onPress={() => handleNumber("/")}>
          <Text style={Style.text}>G</Text>
        </TouchableOpacity>
      </View>

      <View style={Style.row}>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(7)}>
          <Text style={Style.text}>7</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(8)}>
          <Text style={Style.text}>8</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(9)}>
          <Text style={Style.text}>9</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btnSamping} onPress={() => handleNumber("/")}>
          <Text style={Style.text}>÷</Text>
        </TouchableOpacity>
      </View>

      <View style={Style.row}>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(4)}>
          <Text style={Style.text}>4</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(5)}>
          <Text style={Style.text}>5</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(6)}>
          <Text style={Style.text}>6</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btnSamping} onPress={() => handleNumber("*")}>
          <Text style={Style.text}>x</Text>
        </TouchableOpacity>
      </View>

      <View style={Style.row}>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(1)}>
          <Text style={Style.text}>1</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(2)}>
          <Text style={Style.text}>2</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(3)}>
          <Text style={Style.text}>3</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btnSamping} onPress={() => handleNumber("-")}>
          <Text style={Style.text}>-</Text>
        </TouchableOpacity>
      </View>

      <View style={Style.row}>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(".")}>
          <Text style={Style.text}>.</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => handleNumber(0)}>
          <Text style={Style.text}>0</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.bNum} onPress={() => del()}>
          <Text style={Style.text}>⌫</Text>
        </TouchableOpacity>
        <TouchableOpacity style={Style.btnSamping} onPress={() => handleNumber("+")}>
          <Text style={Style.text}>+</Text>
        </TouchableOpacity>
      </View>
      <View style={Style.row}>
        <TouchableOpacity style={Style.bSama} onPress={() => result()}>
          <Text style={Style.text}>=</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}
