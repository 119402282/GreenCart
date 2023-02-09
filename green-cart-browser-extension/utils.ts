
export const dollar = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

export const cleanNum = new Intl.NumberFormat('en-US', { 
    maximumSignificantDigits: 5,
    //add , separator
    useGrouping: true,
});