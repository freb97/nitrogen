import type { CodegenConfig } from '@graphql-codegen/cli';

import { customerAccountApiCustomScalars } from './codegen.helpers';
import { storefrontApiSchema } from './codegen.schema';

const config: CodegenConfig = {
  schema: storefrontApiSchema,
  documents: './server/graphql/**/*.ts',
  generates: {
    './types/shopify.d.ts': {
      plugins: ['typescript', 'typescript-operations'],
      config: {
        skipTypename: true,
        useTypeImports: true,
        defaultScalarType: 'unknown',
        useImplementingTypes: true,
        enumsAsTypes: true,
        scalars: customerAccountApiCustomScalars,
      },
    },
  },
};

export default config;
