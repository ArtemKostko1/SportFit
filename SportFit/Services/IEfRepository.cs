using System;
using System.Collections.Generic;
using System.Threading.Tasks;
using SportFit.Data.Entities;

namespace SportFit.Services
{
    public interface IEfRepository<T> where T: BaseEntity
    {
        IEnumerable<T> GetAll();
        /*T GetById(Guid id);*/
        Task<Guid> Add(T entity);
    }
}