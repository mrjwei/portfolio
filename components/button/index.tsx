type Props = {
  mode?: "light" | "light-text" | "light-border" | "primary" | "primary-text" | "primary-border"
  disabled?: boolean
  className?: string
  children: React.ReactNode
}

export const Button = ({mode = "light", disabled = false, className = "", children}: Props) => {
  switch (mode) {
    case "light":
      return (
        <button
          disabled={disabled}
          className={`block px-3 py-2 bg-white text-sm text-red-300 drop-shadow-2xl rounded-lg transition-opacity duration-200 hover:opacity-80 disabled:text-red-150 ${className}`}
        >
          {children}
        </button>
      )
      case "light-text":
        return (
          <button
            disabled={disabled}
            className={`block px-3 py-2 text-sm text-white underline hover:no-underline disabled:text-mute ${className}`}
          >
            {children}
          </button>
        )
    case "light-border":
      return (
        <button
          disabled={disabled}
          className={`block px-3 py-2 bg-white text-sm text-red-300 drop-shadow-2xl rounded-lg disabled:text-red-150 ${className}`}
        >
          {children}
        </button>
      )
    case "primary":
      return (
        <button
          disabled={disabled}
          className={`block px-3 py-2 bg-red-300 text-sm text-white drop-shadow-2xl rounded-lg disabled:bg-red-150 ${className}`}
        >
          {children}
        </button>
      )
    case "primary-text":
      return (
        <button
          disabled={disabled}
          className={`block px-3 py-2 text-sm text-red-300 underline hover:no-underline disabled:text-red-150 ${className}`}
        >
          {children}
        </button>
      )
    case "primary-border":
      return (
        <button
          disabled={disabled}
          className={`block px-3 py-2 text-sm text-red-300 border-solid border-2 border-red-300 rounded-lg hover:bg-red-300 hover:text-white disabled:text-red-150 disabled:border-red-150 disabled:border-solid disabled:border-2 ${className}`}
        >
          {children}
        </button>
      )
    default:
      return (
        <button
          disabled={disabled}
          className={`block px-3 py-2 bg-white text-sm text-red-300 drop-shadow-2xl rounded-lg disabled:text-red-150 ${className}`}
        >
          {children}
        </button>
      )
  }
}

