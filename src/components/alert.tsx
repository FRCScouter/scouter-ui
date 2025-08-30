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

import styled from "@emotion/native";
import { useTheme } from "@emotion/react";
import { useEffect, useState } from "react";
import { Text, View } from "react-native";
import MaterialIcons from "react-native-vector-icons/MaterialIcons";
import type { UITheme } from "../ScouterUi.types";

interface AlertProps {
	label: string;
	duration: number;
	alertRole: "warning" | "success" | "danger" | "info";
	onRemove: () => void;
}

const Alert: React.FC<AlertProps> = ({ label = "This is alert", duration = 3000, alertRole: role = "info", onRemove }) => {
	const [timeRemaining, setTimeRemaining] = useState(duration);
	const theme = useTheme() as UITheme;

	const getRoleIcon = (role: string): "dangerous" | "check" | "info-outline" | "warning-amber" => {
		switch (role) {
			case "danger":
				return "dangerous";
			case "warning":
				return "warning-amber";
			case "success":
				return "check";
			default:
				return "info-outline";
		}
	};

	const getRoleColors = (role: string) => {
		switch (role) {
			case "danger":
				return {
					backgroundColor: theme.colors.red[100],
					borderColor: theme.colors.red[500],
					textColor: theme.colors.red[700],
				};
			case "warning":
				return {
					backgroundColor: theme.colors.yellow[100],
					borderColor: theme.colors.yellow[500],
					textColor: theme.colors.yellow[700],
				};
			case "success":
				return {
					backgroundColor: theme.colors.green[100],
					borderColor: theme.colors.green[500],
					textColor: theme.colors.green[700],
				};
			default:
				return {
					backgroundColor: theme.colors.blue[100],
					borderColor: theme.colors.blue[500],
					textColor: theme.colors.blue[700],
				};
		}
	};

	const colors = getRoleColors(role);
	useEffect(() => {
		if (timeRemaining === 0) {
			const timeout = setTimeout(() => {
				onRemove();
			}, 1000);
			return () => clearTimeout(timeout);
		}
		const interval = setInterval(() => {
			setTimeRemaining((prev) => (prev > 0 ? prev - 1 : 0));
		}, 1000);
		return () => clearInterval(interval);
	}, [onRemove, timeRemaining]);

	return (
		<AlertContainer
			backgroundColor={colors.backgroundColor}
			borderColor={colors.borderColor}
			style={{
				elevation: 5,
				paddingHorizontal: 20,
				paddingVertical: 16,
				shadowColor: "#000",
				shadowOffset: { height: 1, width: 0 },
				shadowOpacity: 0.15,
				shadowRadius: 3.84,
			}}
		>
			<MaterialIcons
				name={getRoleIcon(role)}
				color={colors.textColor}
				size={24}
				style={{ marginRight: 10 }}
			/>
			<AlertText textColor={colors.textColor}>{label}</AlertText>
		</AlertContainer>
	);
};

const AlertContainer = styled(View) <{ backgroundColor: string; borderColor: string }>`
    border-radius: 8px;
    background-color: ${(props) => props.backgroundColor};
    border-width: 1px;
    border-color: ${(props) => props.borderColor};
    flex-direction: column;
    align-items: flex-start;
    align-items: center;
    justify-content: center;
    flex-direction: row;
    margin: 8px 0;
    position: absolute;
    bottom: 20px;
`;

const AlertText = styled(Text) <{ textColor: string }>`
    font-size: 16px;
    font-weight: 600;
    color: ${(props) => props.textColor}
`;

export default Alert;
