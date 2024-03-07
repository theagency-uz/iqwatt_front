import { useTranslation } from '@/app/i18n/client';
import CustomCheckbox from './customCheckbox';

export default function CheckedServices({ lng, services, formik }) {
  const { t } = useTranslation(lng);
  return (
    <div
      style={{
        display: 'flex',
        flexWrap: 'wrap',
        columnGap: '30px',
        marginBottom: '20px',
      }}
    >
      {services.map(
        (service) =>
          formik.values.services.includes(service) && (
            <CustomCheckbox
              key={service}
              label={t(service)}
              value={formik.values.services.includes(service)}
              onChange={(e, checked) => {
                formik.setFieldValue(
                  'services',
                  checked
                    ? [...formik.values.services, service]
                    : [...formik.values.services.filter((s) => s !== service)]
                );
              }}
            />
          )
      )}
    </div>
  );
}
