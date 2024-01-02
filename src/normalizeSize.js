import {Dimensions, PixelRatio} from 'react-native';
const {width, height} = Dimensions.get('window');
import React, {useState} from 'react';

// Guideline sizes are based on standard ~5" screen mobile device
const guidelineBaseWidth = 390;
const guidelineBaseHeight = 844;
const guidelineBaseFontSize = 15;
const scale = size => (width / guidelineBaseWidth) * size;

export const verticalScale = size => (height / guidelineBaseHeight) * size;
export const moderateFontScale = (size = 0) =>
  size + (PixelRatio.getFontScale() * size - size) * -0.6;

export const moderateScale = (size = 0) =>
  PixelRatio.roundToNearestPixel(size + (scale(size) - size) * 0.8);
