export function themeRequest(theme) {
  return {
    type: '@theme/THEME_REQUEST',
    payload: { theme }
  }
}

export function themeDark() {
  return {
    type: '@theme/THEME_DARK',
    payload: { theme: 'dark' }
  }
}

export function themeLight() {
  return {
    type: '@theme/THEME_LIGHT',
    payload: { theme: 'light' }
  }
}

