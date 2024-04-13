import antfu from '@antfu/eslint-config'

export default antfu(
  {
    typescript: true,
  },
  {
    rules: {
      'no-console': 0,
      'curly': ['error', 'all'],
    },
  },
)
