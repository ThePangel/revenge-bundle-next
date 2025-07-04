import TableRowAssetIcon from '@revenge-mod/components/TableRowAssetIcon'
import RevengeIcon from '~assets/RevengeIcon'
import { Setting } from '../constants'
import type { SettingsItem } from '@revenge-mod/discord/modules/settings'

const RevengeVersionSetting: SettingsItem = {
    parent: Setting.Revenge,
    IconComponent: () => <TableRowAssetIcon id={RevengeIcon} />,
    title: () => 'Revenge',
    useDescription: () =>
        `${__BUILD_VERSION__}-${__BUILD_COMMIT__}-${__BUILD_BRANCH__} (${__BUILD_ENV__})`,
    type: 'static',
}

export default RevengeVersionSetting
