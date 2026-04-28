import { Button, ListItem } from '@transferwise/components';
import { AlertCircle, Check, Building } from '@transferwise/icons';
import { useLanguage } from '../context/Language';

type Props = {
  onBack?: () => void;
  onViewDetails?: () => void;
};

export function AccountDetailsMigration({ onBack, onViewDetails }: Props) {
  const { t } = useLanguage();

  return (
    <div className="account-details-migration">
      {/* Hero Section */}
      <div
        className="migration-hero"
        style={{
          backgroundColor: 'var(--color-dark-green)',
          color: '#9fe870',
          padding: '24px 16px 32px',
          marginBottom: '24px'
        }}
      >
        <h1
          className="np-text-title-large"
          style={{
            color: '#9fe870',
            marginBottom: '8px',
            fontWeight: 700,
            lineHeight: 1.2
          }}
        >
          YOU HAVE NEW {'{'} CCY {'}'} ACCOUNT DETAILS
        </h1>
        <p
          className="np-text-body-default"
          style={{
            color: '#fff',
            margin: 0
          }}
        >
          We're improving how you receive {'{'} CCY {'}'}. {'{'} Info on why we're migrating {'}'}
        </p>
      </div>

      {/* Main Content */}
      <div style={{ padding: '0 16px' }}>
        {/* What you need to do */}
        <section style={{ marginBottom: '32px' }}>
          <h2 className="np-text-title-subsection" style={{ marginBottom: '8px' }}>
            What you need to do
          </h2>
          <p className="np-text-body-default" style={{ marginBottom: '24px', color: 'var(--color-content-secondary)' }}>
            You'll need to start using your new {'{'} CCY {'}'} details by {'{'} date {'}'} to avoid problems receiving {'{'} CCY {'}'} and paying bills.
          </p>

          {/* Action Items List */}
          <ul className="wds-list list-unstyled" style={{ marginBottom: 0 }}>
            <ListItem
              title="Share them with payers"
              subtitle={
                <div>
                  <div className="np-text-body-default" style={{ marginBottom: '4px' }}>
                    Give your new details to anyone who has to pay you {'{'} CCY {'}'}
                  </div>
                  <a
                    href="#"
                    className="np-text-body-default-bold"
                    style={{ color: 'var(--color-content-link)' }}
                    onClick={(e) => { e.preventDefault(); }}
                  >
                    View frequent payers
                  </a>
                </div>
              }
              media={
                <ListItem.AvatarView size={24} style={{ backgroundColor: 'var(--color-background-screen)', border: '1px solid var(--color-border-neutral)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z"/>
                  </svg>
                </ListItem.AvatarView>
              }
            />

            <ListItem
              title="Move any Direct Debits"
              subtitle={
                <div>
                  <div className="np-text-body-default" style={{ marginBottom: '4px' }}>
                    Switch to your new account to make sure payments go through.
                  </div>
                  <a
                    href="#"
                    className="np-text-body-default-bold"
                    style={{ color: 'var(--color-content-link)' }}
                    onClick={(e) => { e.preventDefault(); }}
                  >
                    View Direct Debits
                  </a>
                </div>
              }
              media={
                <ListItem.AvatarView size={24} style={{ backgroundColor: 'var(--color-background-screen)', border: '1px solid var(--color-border-neutral)' }}>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M17 3H7c-1.1 0-2 .9-2 2v16l7-3 7 3V5c0-1.1-.9-2-2-2z"/>
                  </svg>
                </ListItem.AvatarView>
              }
            />

            <ListItem
              title="Update other accounts"
              subtitle="Update your Wise-linked external bank accounts or other accounts like Amazon and Paypal."
              media={
                <ListItem.AvatarView size={24} style={{ backgroundColor: 'var(--color-background-screen)', border: '1px solid var(--color-border-neutral)' }}>
                  <Building size={16} />
                </ListItem.AvatarView>
              }
            />
          </ul>
        </section>

        {/* Why we've made this change */}
        <section style={{ marginBottom: '32px' }}>
          <h2 className="np-text-title-subsection" style={{ marginBottom: '8px' }}>
            Why we've made this change
          </h2>
          <div
            style={{
              backgroundColor: 'var(--color-background-neutral-subtle)',
              padding: '16px',
              borderRadius: '8px'
            }}
          >
            <p className="np-text-body-default" style={{ margin: 0, lineHeight: 1.5 }}>
              We're making these changes as part of ongoing improvement to the way we receive {'{'} CCY {'}'}. {'{'} Explain benefits, e.g. faster payments/access to new features {'}'}
            </p>
            <p className="np-text-body-default" style={{ margin: '12px 0 0', lineHeight: 1.5 }}>
              Nothing about your account is changing. The money in your account is staying safe and protected.
            </p>
          </div>
        </section>

        {/* View new details button */}
        <div style={{ marginBottom: '24px' }}>
          <Button
            v2
            size="md"
            priority="primary"
            block
            onClick={onViewDetails}
          >
            View your new details
          </Button>
        </div>
      </div>
    </div>
  );
}
