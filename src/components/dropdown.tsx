/**
 * Copyright 2025 Lior Shaposhnikov
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import { css } from "@emotion/native";
import type React from "react";
import { useState } from "react";
import {
	FlatList,
	Modal,
	Text,
	type TextStyle,
	TouchableOpacity,
	TouchableWithoutFeedback,
	View,
	type ViewStyle,
} from "react-native";

export interface DropdownProps<T> {
	data: T[];
	onSelect: (selectedItem: T, index: number) => void;
	defaultButtonText?: string;
	buttonStyle?: ViewStyle;
	buttonTextStyle?: TextStyle;
	dropdownStyle?: ViewStyle;
	rowStyle?: ViewStyle;
	rowTextStyle?: TextStyle;
	renderCustomizedButtonChild?: (selectedItem: T | null) => React.ReactNode;
	renderCustomizedRowChild?: (item: T, index: number, isSelected: boolean) => React.ReactNode;
	disabled?: boolean;
	dropdownIconPosition?: "left" | "right";
}

const buttonCss = css`
  padding: 12px;
  background-color: #f0f0f0;
  border-radius: 8px;
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;
const buttonContentCss = css`
  flex-direction: row;
  align-items: center;
`;
const buttonTextCss = css`
  font-size: 16px;
  color: #333;
`;
const iconCss = css`
  font-size: 14px;
  color: #888;
  margin-horizontal: 4px;
`;
const disabledButtonCss = css`
  opacity: 0.5;
`;
const modalOverlayCss = css`
  flex: 1;
  background-color: rgba(0,0,0,0.2);
`;
const dropdownCss = css`
  position: absolute;
  top: 30%;
  left: 10%;
  right: 10%;
  background-color: #fff;
  border-radius: 8px;
  padding-vertical: 8px;
  elevation: 5;
  shadow-color: #000;
  shadow-offset: 0px 2px;
  shadow-opacity: 0.2;
  shadow-radius: 4px;
  max-height: 300px;
`;
const rowCss = css`
  padding-vertical: 12px;
  padding-horizontal: 16px;
`;
const selectedRowCss = css`
  background-color: #e6f0ff;
`;
const rowTextCss = css`
  font-size: 16px;
  color: #333;
`;

function Dropdown<T>({
	data,
	onSelect,
	defaultButtonText = "Select an option",
	buttonStyle,
	buttonTextStyle,
	dropdownStyle,
	rowStyle,
	rowTextStyle,
	renderCustomizedButtonChild,
	renderCustomizedRowChild,
	disabled = false,
	dropdownIconPosition = "right",
}: DropdownProps<T>) {
	const [visible, setVisible] = useState(false);
	const [selectedIndex, setSelectedIndex] = useState<number | null>(null);

	const handleSelect = (item: T, index: number) => {
		setSelectedIndex(index);
		setVisible(false);
		onSelect(item, index);
	};

	const selectedItem = selectedIndex !== null ? data[selectedIndex] : null;

	return (
		<>
			<TouchableOpacity
				style={[buttonCss, buttonStyle, disabled && disabledButtonCss]}
				onPress={() => !disabled && setVisible(true)}
				activeOpacity={0.7}
				disabled={disabled}
			>
				{renderCustomizedButtonChild ? (
					renderCustomizedButtonChild(selectedItem)
				) : (
					<View style={buttonContentCss}>
						{dropdownIconPosition === "left" && <Text style={iconCss}>▼</Text>}
						<Text style={[buttonTextCss, buttonTextStyle]}>
							{selectedItem ? String(selectedItem) : defaultButtonText}
						</Text>
						{dropdownIconPosition === "right" && <Text style={iconCss}>▼</Text>}
					</View>
				)}
			</TouchableOpacity>
			<Modal
				visible={visible}
				transparent
				animationType="fade"
				onRequestClose={() => setVisible(false)}
			>
				<TouchableWithoutFeedback onPress={() => setVisible(false)}>
					<View style={modalOverlayCss} />
				</TouchableWithoutFeedback>
				<View style={[dropdownCss, dropdownStyle]}>
					<FlatList
						data={data}
						keyExtractor={(_, idx) => idx.toString()}
						renderItem={({ item, index }) => {
							const isSelected = index === selectedIndex;
							return (
								<TouchableOpacity
									style={[rowCss, rowStyle, isSelected && selectedRowCss]}
									onPress={() => handleSelect(item, index)}
								>
									{renderCustomizedRowChild ? (
										renderCustomizedRowChild(item, index, isSelected)
									) : (
										<Text style={[rowTextCss, rowTextStyle]}>{String(item)}</Text>
									)}
								</TouchableOpacity>
							);
						}}
					/>
				</View>
			</Modal>
		</>
	);
}

export default Dropdown;
