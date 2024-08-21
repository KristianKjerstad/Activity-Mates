import { hp, wp } from "@/helpers/common"
import { PropsWithChildren } from "react"
import { View } from "react-native"



const PaddedContainer = (props: PropsWithChildren) => {

    const sidePaddingMultiplier = 4
    const heightPaddingMultiplier = 0


    return <View style={{ paddingLeft: wp(sidePaddingMultiplier), paddingRight: wp(sidePaddingMultiplier), paddingBottom: hp(heightPaddingMultiplier), paddingTop: hp(heightPaddingMultiplier) }}>
        {props.children}
    </View>
}

export default PaddedContainer