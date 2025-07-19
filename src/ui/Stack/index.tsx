import React, { useMemo } from "react";
import { View, type ViewProps, type ViewStyle } from "react-native";
import { ScouterSizeDictionary, type ScouterSizeKey } from "../ScouterDictionaries";

interface StackProps extends ViewProps {
    direction?: "column" | "row";
    gap?: ScouterSizeKey;
    style?: ViewStyle | ViewStyle[] | undefined;
    children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({ direction = "row", gap = "sm", children, style, ...rest }) => {
    const gapSize = useMemo(() => Number.parseInt(ScouterSizeDictionary[gap], 10), [gap]);
    const isRow = direction === "row";

    const childrenArray = React.Children.toArray(children)
    const spacedChildren = childrenArray.map((child, idx) => {
        const childStyle: ViewStyle = {};
        if (idx !== 0) {
            if (isRow) {
                childStyle.marginLeft = gapSize;
            } else {
                childStyle.marginTop = gapSize;
            }
        }

        if (React.isValidElement(child)) {
            const element = child as React.ReactElement<any, string | React.JSXElementConstructor<any>>;
            const existingStyle = element.props?.style;
            const mergedStyle = existingStyle ? [existingStyle, childStyle] : [childStyle];
            return React.cloneElement(element, {
                style: mergedStyle,
            });
        }
        // If not a valid React element, return as is
        return child;
    });

    return (
        <View
            {...rest}
            style={[{ alignItems: "center", flexDirection: direction, justifyContent: "center" }, style]}
        >
            {spacedChildren}
        </View>
    );
};

export default Stack;
