package com.mesdepenses.app.service.mapper;

import com.mesdepenses.app.domain.*;
import com.mesdepenses.app.service.dto.ArticleDTO;

import org.mapstruct.*;

/**
 * Mapper for the entity Article and its DTO ArticleDTO.
 */
@Mapper(componentModel = "spring", uses = {CategoryMapper.class})
public interface ArticleMapper extends EntityMapper<ArticleDTO, Article> {

    @Mapping(source = "category.id", target = "categoryId")
    ArticleDTO toDto(Article article); 

    @Mapping(source = "categoryId", target = "category")
    Article toEntity(ArticleDTO articleDTO);

    default Article fromId(Long id) {
        if (id == null) {
            return null;
        }
        Article article = new Article();
        article.setId(id);
        return article;
    }
}
