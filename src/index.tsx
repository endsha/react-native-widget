import { NativeModules } from 'react-native';

type WidgetType = {
  multiply(a: number, b: number): Promise<number>;
};

const { Widget } = NativeModules;

export default Widget as WidgetType;
