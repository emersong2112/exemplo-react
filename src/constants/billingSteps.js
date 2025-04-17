/**
 * Billing steps configuration.
 */

export const BASE_STEPS = [
  { label: 'Dados da cobrança' },
  { label: 'Juros e Multa' },
  { label: 'Dados do cliente' },
  { label: 'Resumo' },
];

export const DOCUMENT_STEP = { label: 'Documentos' };

/**
 * Get steps for billing flow.
 * @param {boolean} useDocuments - whether to include the Documentos step
 * @returns {Array<{label: string}>}
 */
export function getBillingSteps(useDocuments) {
  if (useDocuments) {
    const steps = [
      ...BASE_STEPS.slice(0, 2),
      DOCUMENT_STEP,
      ...BASE_STEPS.slice(2),
    ];
    return steps;
  }
  return BASE_STEPS;
}
