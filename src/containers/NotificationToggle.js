import React, { useEffect, useState } from 'react'
import styled from 'styled-components'
import { H2 } from '../components/Typography'
import { ToggleSwitch } from '../components/Input'
import notifications from '../utility/notifications'
import {
  ANALYTICS_EVENTS,
  NOTIFICATION_PERMISSIONS as N_PERMISSIONS,
  NOTIFICATION_SETTINGS_CACHE_KEY as N_SETTINGS_CACHE_KEY,
} from '../utility/Constants'
import { analytics } from '../utility/firebase'

const NotificationToggleContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`

const StyledH2 = styled(H2)`
  margin: 0 0 0 0.5em;
  opacity: 1;
`

export default () => {
  const [toggled, setToggled] = useState(false)

  useEffect(() => {
    setToggled(notifications.areEnabled())
  }, [setToggled])

  const handleToggle = e => {
    // if user's first time on site, request notification permissions from browser
    if (notifications.isCurrentPermission(N_PERMISSIONS.DEFAULT)) {
      notifications.requestPermission(permission => {
        toggleNotifications(permission === N_PERMISSIONS.GRANTED)
      })
    }

    toggleNotifications(!toggled)
  }

  // toggle switch UI and cache notifications settings
  const toggleNotifications = notificationsEnabled => {
    setToggled(notificationsEnabled)
    analytics.logEvent(ANALYTICS_EVENTS.NotificationToggled, { enabled: notificationsEnabled })
    const nSettingsJSON = JSON.stringify({ notificationsEnabled })
    localStorage.setItem(N_SETTINGS_CACHE_KEY, nSettingsJSON)
  }

  return (
    <NotificationToggleContainer>
      <ToggleSwitch
        checked={toggled}
        disabled={notifications.isCurrentPermission(N_PERMISSIONS.DENIED)}
        disabledTooltip={'Notifications blocked, change browser settings'}
        onChange={handleToggle}
      />
      <StyledH2>Notifications</StyledH2>
    </NotificationToggleContainer>
  )
}
