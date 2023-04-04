/**
 * check if any errros are overriden from FE
 * @param length define length for uniq string
 * @return string
 */
export const uniqueId = (length = 16) => {
  return parseInt(
    Math.ceil(Math.random() * Date.now())
      .toPrecision(length)
      .toString()
      .replace('.', '')
  );
};
 