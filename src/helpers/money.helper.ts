export const currencyFormat = (
  value: number | string | null | undefined,
  locale = 'pt-BR',
  currency = 'BRL',
): string => {
  if (value === null || value === undefined || value === '') return '';

  // Converter string para número se necessário
  const numValue = typeof value === 'string' 
    ? parseFloat(value.replace(',', '.'))
    : value;

  // Validar se é um número válido
  if (isNaN(numValue)) return '';

  return new Intl.NumberFormat(locale, {
    style: 'currency',
    currency,
  }).format(numValue);
};