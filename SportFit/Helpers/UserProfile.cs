using AutoMapper;
using SportFit.Data.Entities;
using SportFit.Data.Models;

namespace SportFit.Helpers
{
    public class UserProfile : Profile
    {
        public UserProfile()
        {
            CreateMap<UserModel, User>()
                .ForMember(dst => dst.Id, opt => opt.Ignore())
                .ForMember(dst => dst.Login, opt => opt.MapFrom(src => src.Login))
                .ForMember(dst => dst.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dst => dst.Nickname, opt => opt.MapFrom(src => src.Nickname))
                .ForMember(dst => dst.Avatar, opt => opt.MapFrom(src => src.Avatar))
                .ForMember(dst => dst.FullName, opt => opt.MapFrom(src => src.FullName))
                .ForMember(dst => dst.BirthDate, opt => opt.MapFrom(src => src.BirthDate))
                .ForMember(dst => dst.MobilePhone, opt => opt.MapFrom(src => src.MobilePhone))
                .ForMember(dst => dst.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dst => dst.Instagram, opt => opt.MapFrom(src => src.Instagram))
                .ForMember(dst => dst.Vk, opt => opt.MapFrom(src => src.Vk))
                .ForMember(dst => dst.CreationDate, opt => opt.MapFrom(src => src.CreationDate))
                .ForMember(dst => dst.ModificationDate, opt => opt.MapFrom(src => src.ModificationDate));
            
            CreateMap<User, AuthenticateResponse>()
                .ForMember(dst => dst.Id, opt => opt.MapFrom(src => src.Id))
                .ForMember(dst => dst.Login, opt => opt.MapFrom(src => src.Login))
                .ForMember(dst => dst.Password, opt => opt.MapFrom(src => src.Password))
                .ForMember(dst => dst.Nickname, opt => opt.MapFrom(src => src.Nickname))
                .ForMember(dst => dst.Avatar, opt => opt.MapFrom(src => src.Avatar))
                .ForMember(dst => dst.FullName, opt => opt.MapFrom(src => src.FullName))
                .ForMember(dst => dst.BirthDate, opt => opt.MapFrom(src => src.BirthDate))
                .ForMember(dst => dst.MobilePhone, opt => opt.MapFrom(src => src.MobilePhone))
                .ForMember(dst => dst.Email, opt => opt.MapFrom(src => src.Email))
                .ForMember(dst => dst.Instagram, opt => opt.MapFrom(src => src.Instagram))
                .ForMember(dst => dst.Vk, opt => opt.MapFrom(src => src.Vk))
                .ForMember(dst => dst.CreationDate, opt => opt.MapFrom(src => src.CreationDate))
                .ForMember(dst => dst.ModificationDate, opt => opt.MapFrom(src => src.ModificationDate))
                .ForMember(dst => dst.Token, opt => opt.Ignore());
        }
    }
}