using System;

namespace UserRegistrationApi.Models
{
    public class JwtSettings
    {
        public string Secret { get; set; }
        public int ExpireDays { get; set; }

        public TimeSpan TokenLifetime
        {
            get { return TimeSpan.FromDays(ExpireDays); }
        }
    }
}
