import React from 'react'
import { cn, HtmlProps } from '@/utils'
import { cva, VariantProps } from 'class-variance-authority'

export type {{pascalCase name}}Props = HtmlProps<'{{ element }}'> & VariantProps<typeof rootVariants> & {
  //
}

const rootVariants = cva('', {
  variants: {},
  // compoundVariants: []
})

export const {{pascalCase name}}: React.FC<{{pascalCase name}}Props> = (props) => {
  const { className, ...rest } = props
  const cls = {{snakeCase name}}Variants({ className })

  return (
    <{{ element }} className={cls} {...rest}>
      {{pascalCase name}}
    </{{ element }}>
  )
}
