/* eslint-disable */
import DetailsForm from './detailsForm';

export default {
  title: "DetailsForm",
};

export const Default = () => <DetailsForm id={5} material={"cotton"} colors={"pink/blue"} />;

Default.story = {
  name: 'default',
};
